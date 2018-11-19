class ComponentType {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState = callback => {
    const values = callback(this.state);
    this.state = {
      ...values,
    };
    // Delete all Dom
    document.getElementById('root').innerHTML = '';
    // then render
    this.render();
    console.log('refresh');
  };

  displayError = message => {
    const span = document.createElement('span');
    span.textContent = `Global Contruct Error: ${message}`;
    span.style.position = 'absolute';
    span.style.bottom = 0;
    span.style.left = 0;
    span.style.right = 0;
    span.style.backgroundColor = 'red';
    span.style.minHeight = '50px';
    document.body.appendChild(span);
    return span;
  };

  shouldComponentUpdate = (actualState, nextState) => {
    // // 1- compares keys
    // const actualStateKeys = Object.keys(actualState).map(key => key);
    // const nextStateKeys = Object.keys(nextState).map(key => key);

    // console.log(actualStateKeys);
    // console.log(nextStateKeys);

    // // 1- Check objects have the same number of keys
    // if (actualStateKeys.length !== nextStateKeys.length) {
    //   console.log('If Object length different refresh');
    //   console.log('ActualStateKeys', actualStateKeys);
    //   console.log('-----------------');
    //   console.log('nextStateKeys', nextStateKeys);
    //   console.log('-----------------');
    //   return true;
    // }

    // // 2- check if actualState contains all same keys
    // const doesActualStateIncludesAllTheSameKeys = nextStateKeys.map(key =>
    //   actualStateKeys.includes(key),
    // );
    // // if the array contains at least one false, then refresh
    // if (doesActualStateIncludesAllTheSameKeys.some(key => !key)) {
    //   console.log('Are keys differents');
    //   console.log('ActualState', actualStateKeys);
    //   console.log('-----------------');
    //   console.log('NextStateKeys', nextStateKeys);
    //   console.log('-----------------');
    //   return true;
    // }

    // // 3- if objects contains the same keys, then compare the values inside each keys
    // console.log('CASE 3');
    // if (actualStateKeys.some(key => actualState[key] !== nextState[key])) {
    //   return true;
    // }
    return true;
  };
}

export default ComponentType;
