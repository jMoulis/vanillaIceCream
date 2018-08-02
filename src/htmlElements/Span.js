const Span = props => {
  const { attributes, className, actions, children } = props;
  try {
    const span = document.createElement('span');

    if (actions) {
      Object.keys(actions).forEach(key => {
        span[key] = actions[key];
      });
    }
    if (className) {
      span.classList.add(className);
    }

    if (attributes) {
      Object.keys(attributes).forEach(attr => {
        span.setAttribute([attr], attributes[attr]);
      });
    }

    if (children && children.length > 0) {
      children.forEach(child => {
        if (child) {
          span.appendChild(child);
        }
      });
    }
    return span;
  } catch (error) {
    console.error(error);
  }
};

export default Span;
