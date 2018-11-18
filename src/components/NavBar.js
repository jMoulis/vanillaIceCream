import DomElement from './DomElement';

const NavBar = ({
  actions: { setGoodDataFileNameAction, addUserAction, addNewKeyInStateAction },
}) => {
  const addOneUserButton = new DomElement({
    tagName: 'button',
    container: document.getElementById('root'),
    attributes: {
      name: 'button',
      type: 'button',
      textContent: 'Add one User',
      onClick: addUserAction,
      style: {},
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
      style: {},
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
      onClick: addNewKeyInStateAction,
      style: {},
    },
  });
  addNewKey.render();
};

export default NavBar;
