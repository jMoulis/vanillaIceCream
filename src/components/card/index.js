import { css } from 'emotion';
import {
  Div,
  Ul,
  Button,
  Li,
  Span,
  Input,
} from '../../htmlElements/HTMlElement';
import TextNode from '../../htmlElements/Text';
import {
  findAnElement,
  findParent,
  findNextElement,
} from '../../service/domNavigation';
import {
  deleteElement,
  addToDom,
  removeElement,
} from '../../service/actionOnDom';

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
  constructor(container, cardItem, callback) {
    this.container = container;
    this.cardItem = cardItem;
    this.inputValue = '';
    this.listsItems = cardItem.list;
    this.domChanges = {};
    this.callback = callback;
  }

  domChange = element => {
    const parentElement = findParent({ element });
    const nextElement = findNextElement(element);
    removeElement(element, () => addToDom(element, parentElement, nextElement));
  };

  addToArray = (array, item, callback) => {
    array.push(item);
    this.callback(array);
    callback();
  };

  setInputValue = input => {
    this.inputValue = input.value;
  };

  render = () => {
    return this.container.appendChild(
      Div({
        tag: 'div',
        className: card,
        attributes: {
          'data-position': 1,
        },
        children: [
          Div({
            tag: 'div',
            className: cardHeader,
            children: [TextNode(this.cardItem.title)],
            attributes: {
              'data-position': 1,
            },
          }),
          Div({
            tag: 'div',
            className: cardContent,
            attributes: {
              'data-position': 2,
            },
            children: [
              Ul({
                tag: 'ul',
                attributes: {
                  'data-position': 1,
                },
                children:
                  this.listsItems && this.listsItems.length > 0
                    ? this.listsItems.map((item, index) =>
                        Li({
                          tag: 'li',
                          attributes: {
                            id: index + 1,
                            'data-position': index + 1,
                          },
                          children: [
                            TextNode(item.content),
                            Button({
                              tag: 'button',
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
                tag: 'input',
                attributes: {
                  type: 'text',
                  name: 'newItem',
                  'data-position': 2,
                },
                actions: {
                  onchange: ({ target }) => {
                    this.setInputValue(target);
                  },
                  onkeypress: ({ target }) => {
                    this.setInputValue(target);
                  },
                },
              }),
              Button({
                tag: 'button',
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
                          tag: 'span',
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
                          Li({
                            tag: 'li',
                            children: [
                              TextNode(this.inputValue),
                              Button({
                                tag: 'button',
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
