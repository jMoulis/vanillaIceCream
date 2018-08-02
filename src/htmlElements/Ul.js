export const Ul = props => {
  const { attributes, className, actions, children } = props;
  try {
    const ul = document.createElement('ul');

    if (className) {
      ul.classList.add(className);
    }

    if (attributes) {
      Object.keys(attributes).forEach(attr => {
        ul.setAttribute([attr], attributes[attr]);
      });
    }

    if (children && children.length > 0) {
      children.forEach(child => {
        if (child) {
          ul.appendChild(child);
        }
      });
    }

    return ul;
  } catch (error) {
    console.error(error);
  }
};
