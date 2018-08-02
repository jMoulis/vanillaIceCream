export const Div = props => {
  const { attributes, className, actions, children, tag } = props;
  try {
    const div = document.createElement(tag || 'div');

    if (className) {
      div.classList.add(className);
    }

    if (attributes) {
      Object.keys(attributes).forEach(attr => {
        div.setAttribute([attr], attributes[attr]);
      });
    }

    if (children && children.length > 0) {
      children.forEach(child => {
        if (child) {
          div.appendChild(child);
        }
      });
    }
    return div;
  } catch (error) {
    console.error(error);
  }
};
