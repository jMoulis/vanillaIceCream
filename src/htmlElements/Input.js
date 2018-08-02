const Input = props => {
  const { attributes, className, actions, children } = props;
  try {
    const input = document.createElement('input');

    if (actions) {
      Object.keys(actions).forEach(key => {
        input[key] = actions[key];
      });
    }
    if (className) {
      input.classList.add(className);
    }

    if (attributes) {
      Object.keys(attributes).forEach(attr => {
        input.setAttribute([attr], attributes[attr]);
      });
    }

    if (children && children.length > 0) {
      children.forEach(child => {
        if (child) {
          input.appendChild(child);
        }
      });
    }
    return input;
  } catch (error) {
    console.error(error);
  }
};

export default Input;
