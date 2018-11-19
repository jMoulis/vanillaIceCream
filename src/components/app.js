/* eslint-disable no-restricted-syntax */
import ComponentType from './ComponentType';
import UsersList from './UsersList';
import NavBar from './NavBar';
import DomElement from './DomElement';

class App extends ComponentType {
  constructor(props) {
    super(props);
    this.props = props;
    this.root = document.getElementById('root');
    this.state = {
      users: [],
      data: 'data.json',
    };
    this.store = new props.Store({ name: 'main' });
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch(this.state.data);
      if (response.status !== 200)
        throw Error(
          `Error while fetching data. Code error: ${response.status} `,
        );
      const users = await response.json();
      this.store.addToStore({ users });
      this.setState(prevState => ({
        ...prevState,
        users,
      }));
      return users;
    } catch (error) {
      this.setState(prevState => ({ ...prevState, error: error.message }));
    }
  };

  addNewKeyInStateAction = () => {
    this.setState(prevState => ({
      ...prevState,
      user: 'New Key',
    }));
  };

  renderList = () => {
    const usersList = new UsersList(this.state.users);
    this.root.appendChild(usersList.render());
  };

  addUser = () => {
    this.setState(prevState => {
      this.store.addToStore({
        users: [...prevState.users, { name: 'libéti', age: '12' }],
      });
      return {
        ...prevState,
        test: 'test',
        users: [...prevState.users, { name: 'libéti', age: '12' }],
      };
    });
  };

  render = () => {
    NavBar({
      actions: {
        setGoodDataFileNameAction: this.fetchData,
        addUserAction: this.addUser,
        addNewKeyInStateAction: this.addNewKeyInStateAction,
      },
    });
    document.getElementById('root').appendChild(
      new DomElement({
        tagName: 'span',
        children: [
          `<span>${
            this.store.getStore().main.users
              ? this.store.getStore().main.users.length
              : ''
          }</span>`,
        ],
      }).render(),
    );
    return this.renderList();
  };
}

export default App;
