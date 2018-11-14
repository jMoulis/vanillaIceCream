import {
  setDomElementFromStringToArray,
  parseEvent,
  parseCssSelectorCamelCase,
  style,
} from '../utils/utils';

// const targetNode = document.querySelector('head');
//     const config = { attributes: true, childList: true, subtree: true };
//     const aknowledgement = value => {
//       console.log(value);
//     };
//     // const { styleSheets } = document;
//     //     const styleSheet = findStyleSheetByTitle(styleSheets, 'data-css');
//     //     console.log(styleSheet);
//     componentDidChange(targetNode, config, aknowledgement);
class Button {
  constructor(props) {
    this.props = props;
  }

  render = () => {
    const button = document.createElement('button');
    if (!this.props) {
      console.error('hum... Your button has no this.props, not even a text');
      return button;
    }

    if (this.props.attributes) {
      Object.keys(this.props.attributes).forEach(key => {
        if (key === 'textContent') {
          button.textContent = this.props.attributes[key];
        } else if (typeof this.props.attributes[key] === 'function') {
          return button.addEventListener(
            parseEvent(key),
            this.props.attributes[key],
          );
        } else if (key === 'className') {
          if (typeof this.props.attributes[key] === 'object') {
            return button.setAttribute(
              'class',
              style(this.props.attributes[key]),
            );
          }
        } else if (key === 'style') {
          return button.setAttribute(
            'style',
            parseCssSelectorCamelCase(this.props.attributes[key]),
          );
        } else {
          return button.setAttribute(key, this.props.attributes[key]);
        }
      });
    }
    if (Array.isArray(this.props.children)) {
      this.props.children.forEach(child => {
        if (child instanceof Element) {
          button.appendChild(child);
        } else if (typeof child === 'string') {
          button.appendChild(setDomElementFromStringToArray(child));
        }
      });
    }
    return button;
  };
}

export default Button;
