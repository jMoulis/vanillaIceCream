const ListItem = props => {
  const { attributes, className, actions, children } = props;
  try {
    const li = document.createElement('li');

    if (className) {
      li.classList.add(className);
    }

    if (attributes) {
      Object.keys(attributes).forEach(attr => {
        li.setAttribute([attr], attributes[attr]);
      });
    }

    if (children && children.length > 0) {
      children.forEach(child => {
        if (child) {
          li.appendChild(child);
        }
      });
    }

    return li;
  } catch (error) {
    console.error(error);
  }
};

export default ListItem;
