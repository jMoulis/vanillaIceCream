const HTMLElement = props => {
  const { attributes, className, actions, children, tag } = props;
  try {
    const span = document.createElement(tag || 'div');

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
export const Div = props => HTMLElement(props);
export const Span = props => HTMLElement(props);
export const Ul = props => HTMLElement(props);
export const Li = props => HTMLElement(props);
export const Button = props => HTMLElement(props);
export const Input = props => HTMLElement(props);
