import { css } from 'emotion';
import Card from '../card';
import { Div } from '../../htmlElements/Div';
import cards from '../../data/cards';

const className = css({
  display: 'flex',
  flexWrap: 'wrap',
});

const HomePage = () => {
  const container = Div({
    tag: 'main',
    attributes: {
      id: 'main',
    },
    className,
  });

  document.getElementById('root').appendChild(container);
  cards.map(card => new Card(container, card).render());
};

export default HomePage;
