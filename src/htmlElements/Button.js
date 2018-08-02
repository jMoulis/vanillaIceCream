const Button = props => {
  const { attributes, className, actions, children } = props;
  try {
    const button = document.createElement('button');

    if (actions) {
      Object.keys(actions).forEach(key => {
        button[key] = actions[key];
      });
    }
    if (className) {
      button.classList.add(className);
    }

    if (attributes) {
      Object.keys(attributes).forEach(attr => {
        button.setAttribute([attr], attributes[attr]);
      });
    }

    if (children && children.length > 0) {
      children.forEach(child => {
        if (child) {
          button.appendChild(child);
        }
      });
    }
    return button;
  } catch (error) {
    console.error(error);
  }
};

export default Button;
