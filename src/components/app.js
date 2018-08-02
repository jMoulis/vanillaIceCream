import HomePage from './homepage/index';

class App {
  constructor(props) {
    this.props = props;
  }

  loadApp = () => {
    const home = new HomePage();
    console.log(home);
    home.render();
  };
}

export default App;
