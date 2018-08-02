import HomePage from './homepage/index';

class App {
  constructor(props) {
    this.props = props;
  }

  loadApp = () => {
    HomePage();
  };
}

export default App;
