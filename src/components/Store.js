class Store {
  constructor({ name }) {
    this.name = name;
    this.store = {
      [name]: {},
    };
  }

  addToStore = (value, callback) => {
    this.store = {
      ...this.store,
      [this.name]: {
        ...this.store[this.name],
        ...value,
      },
    };
    if (callback) {
      callback();
    }
  };

  getStore = () => this.store;
}

export default Store;
