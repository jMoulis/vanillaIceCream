/* eslint-disable no-restricted-syntax */
import Button from './Button';
import { componentDidChange } from '../utils/utils';

const Span = props => {
  const span = document.createElement('span');
  span.textContent = 'Je suis un span';
  return span;
};

const style = () => ({
  backgroundColor: 'green',
  fontWeight: 'bold',
});

class App {
  constructor(props) {
    this.props = props;
    this.root = document.getElementById('root');
  }

  loadApp = () => {
    const button = new Button({
      attributes: {
        name: 'button',
        type: 'button',
        onClick: event => console.log(event.target),
        className: style(),
        style: {},
      },
      children: [Span(), 'test', '<i class="fas fa-ad"></i>'],
    });
    this.root.appendChild(button.render());
  };
}

export default App;
