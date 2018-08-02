import { css } from 'emotion';
import Card from '../card';
import { Div } from '../../htmlElements/HTMlElement';
import cards from '../../data/cards';

const className = css({
  display: 'flex',
  flexWrap: 'wrap',
});

class HomePage {
  constructor() {
    this.cards = cards;
  }

  handleChildChange = dataChanged => {
    if (this.cards !== dataChanged) {
      this.render();
      this.cards = dataChanged;
    }
  };

  render = () => {
    const container = Div({
      tag: 'main',
      attributes: {
        id: 'main',
      },
      className,
    });

    document.getElementById('root').appendChild(container);
    this.cards.map(card =>
      new Card(container, card, this.handleChildChange).render()
    );
  };
}

export default HomePage;
