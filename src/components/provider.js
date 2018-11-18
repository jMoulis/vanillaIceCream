class Store {
  constructor() {
    this.store = {
      init: 'true',
      components: [],
      addToStore: this.addToStore,
      getStore: this.getStore,
    };
  }

  addToStore = value => {
    this.store = {
      ...this.store,
      components: [...this.store.components, value],
    };
    console.log(this.store);
  };

  getStore = () => this.store;
}

export default Store;
