import DomElement from './DomElement';
import { withStyles } from '../utils/cssInJs';

const style = {
  button: {
    color: 'green',
    '&:hover': {
      color: 'blue',
      cursor: 'pointer',
    },
  },
};

const NavBar = ({
  actions: { setGoodDataFileNameAction, addUserAction, addNewKeyInStateAction },
}) => {
  const classes = withStyles(style);

  const addOneUserButton = new DomElement({
    tagName: 'button',
    container: document.getElementById('root'),
    attributes: {
      name: 'button',
      type: 'button',
      textContent: 'Add one User',
      onClick: addUserAction,
      className: [classes.button, 'test'],
    },
  });
  addOneUserButton.render();

  const fetchDataButton = new DomElement({
    tagName: 'button',
    container: document.getElementById('root'),
    attributes: {
      name: 'button',
      type: 'button',
      textContent: 'FetchData',
      onClick: setGoodDataFileNameAction,
      style: {
        backgroundColor: 'gray',
      },
    },
  });
  fetchDataButton.render();

  const addNewKey = new DomElement({
    tagName: 'button',
    container: document.getElementById('root'),
    attributes: {
      name: 'button',
      type: 'button',
      textContent: 'addNewKey',
    },
  });
  addNewKey.render();
};

export default NavBar;
