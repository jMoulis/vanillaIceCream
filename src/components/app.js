/* eslint-disable no-restricted-syntax */
import ComponentType from './ComponentType';
import UsersList from './UsersList';
import Span from './DomElement';
import NavBar from './NavBar';

class App extends ComponentType {
  constructor(props) {
    super(props);
    this.props = props;
    this.root = document.getElementById('root');
    this.state = {
      users: [],
      data: 'data.json',
    };
    this.init();
  }

  init = () => {
    this.fetchData();
  };

  fetchData = async () => {
    try {
      const response = await fetch(this.state.data);
      if (response.status !== 200)
        throw Error(
          `Error while fetching data. Code error: ${response.status} `,
        );
      const users = await response.json();
      this.setState(prevState => ({
        ...prevState,
        users,
      }));
    } catch (error) {
      this.setState(prevState => ({ ...prevState, error: error.message }));
    }
  };

  error = errorMessage => {
    const span = document.createElement('span');
    span.textContent = errorMessage;
    return span;
  };

  setGoodDataFileName = () => {
    this.fetchData();
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
    this.setState(prevState => ({
      ...prevState,
      test: 'test',
      users: [...prevState.users, { name: 'libéti', age: '12' }],
    }));
  };

  render = () => {
    NavBar({
      actions: {
        setGoodDataFileNameAction: this.setGoodDataFileName,
        addUserAction: this.addUser,
        addNewKeyInStateAction: this.addNewKeyInStateAction,
      },
    });
    if (this.state.error) {
      return this.root.appendChild(
        new Span({
          domElement: 'span',
          attributes: { name: 'test', textContent: this.state.error },
        }).render(),
      );
    }
    return this.renderList();
  };
}

export default App;
