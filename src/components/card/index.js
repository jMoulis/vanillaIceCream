import { css } from 'emotion';
import { Div } from '../../htmlElements/Div';
import Button from '../../htmlElements/Button';
import ListItem from '../../htmlElements/ListItem';
import { Ul } from '../../htmlElements/Ul';
import TextNode from '../../htmlElements/Text';
import {
  findAnElement,
  findParent,
  findNextElement,
  findNextElementPosition,
} from '../../service/domNavigation';
import {
  deleteElement,
  addToDom,
  removeElement,
} from '../../service/actionOnDom';
import Input from '../../htmlElements/Input';
import cards from '../../data/cards';
import Span from '../../htmlElements/Span';

const card = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  margin: '.5rem',
});

const cardHeader = css({
  padding: '1rem 2rem',
  backgroundColor: 'gray',
});

const cardContent = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 2rem',
  ' ul': {
    listStyleType: 'none',
    padding: '0',
  },
});

class Card {
  constructor(container, cardItem) {
    this.container = container;
    this.cardItem = cardItem;
    this.inputValue = '';
    this.listsItems = cardItem.list;
    this.domChanges = {};
  }

  domChange = element => {
    const parentElement = findParent({ element });
    const nextElement = findNextElement(element);
    removeElement(element, () => addToDom(element, parentElement, nextElement));
  };

  addToArray = (array, item, callback) => {
    array.push(item);
    callback();
  };

  setInputValue = ({ value }) => {
    this.inputValue = value;
    return value;
  };

  render = () => {
    return this.container.appendChild(
      Div({
        className: card,
        attributes: {
          'data-position': 1,
        },
        children: [
          Div({
            className: cardHeader,
            children: [TextNode(this.cardItem.title)],
            attributes: {
              'data-position': 1,
            },
          }),
          Div({
            className: cardContent,
            attributes: {
              'data-position': 2,
            },
            children: [
              Ul({
                attributes: {
                  'data-position': 1,
                },
                children:
                  this.listsItems && this.listsItems.length > 0
                    ? this.listsItems.map((item, index) =>
                        ListItem({
                          attributes: {
                            id: index + 1,
                            'data-position': index + 1,
                          },
                          children: [
                            TextNode(item.content),
                            Button({
                              attributes: {
                                'data-position': 1,
                              },
                              children: [TextNode('Delete')],
                              actions: {
                                onclick: ({ target }) => {
                                  deleteElement(target, () => {
                                    this.inputValue = '';
                                  });
                                },
                              },
                            }),
                          ],
                        })
                      )
                    : [TextNode('No Item yet')],
              }),
              Input({
                attributes: {
                  type: 'text',
                  name: 'newItem',
                  'data-position': 2,
                },
                actions: {
                  onchange: ({ target }) => {
                    this.setInputValue(target);
                    this.domChange(target);
                  },
                },
              }),
              Button({
                actions: {
                  onclick: evt => {
                    const parent = findAnElement({
                      element: evt.target,
                      tagTarget: 'ul',
                    });
                    const input = findAnElement({
                      element: evt.target,
                      tagTarget: 'input',
                    });

                    if (this.inputValue.length === 0) {
                      const parent = findParent({ element: evt.target });
                      return parent.insertBefore(
                        Span({
                          children: [TextNode('Fill in a text first')],
                        }),
                        evt.target
                      );
                    }
                    input.value = '';
                    this.addToArray(
                      this.listsItems,
                      {
                        content: this.inputValue,
                      },
                      () => {
                        parent.appendChild(
                          ListItem({
                            children: [
                              TextNode(this.inputValue),
                              Button({
                                children: [TextNode('Delete')],
                                actions: {
                                  onclick: ({ target }) => {
                                    deleteElement(target, () => {
                                      this.inputValue = '';
                                    });
                                  },
                                },
                              }),
                            ],
                          })
                        );
                        this.domChange(parent);
                        return this.listsItems;
                      }
                    );
                  },
                },
                children: [document.createTextNode('Add')],
              }),
            ],
          }),
        ],
      })
    );
  };
}

export default Card;
