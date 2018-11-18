import {
  setDomElementFromStringToArray,
  parseEvent,
  parseCssSelectorCamelCase,
  style,
} from '../utils/utils';
import ComponentType from './ComponentType';

class DomElement extends ComponentType {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render = () => {
    try {
      if (!this.props) {
        return this.displayError(
          "No Props found, can't create this domElement",
        );
      }
      if (!this.props.tagName) {
        return this.displayError(
          'Error while creating a new dom Element: No tagname given',
        );
      }
      const domElement = document.createElement(this.props.tagName);

      if (this.props.attributes) {
        Object.keys(this.props.attributes).forEach(key => {
          if (key === 'container') {
            this.container = this.props.attributes[key];
          } else if (key === 'textContent') {
            domElement.textContent = this.props.attributes[key];
          } else if (typeof this.props.attributes[key] === 'function') {
            return domElement.addEventListener(
              parseEvent(key),
              this.props.attributes[key],
            );
          } else if (key === 'className') {
            if (this.props.attributes[key] instanceof Object) {
              return domElement.setAttribute(
                'class',
                style(this.props.attributes[key]),
              );
            }
          } else if (key === 'style') {
            return domElement.setAttribute(
              'style',
              parseCssSelectorCamelCase(this.props.attributes[key]),
            );
          } else {
            return domElement.setAttribute(key, this.props.attributes[key]);
          }
        });
      }

      if (this.props.children && Array.isArray(this.props.children)) {
        this.props.children.forEach(Child => {
          if (Object.getPrototypeOf(Child) instanceof ComponentType) {
            domElement.appendChild(Child.render());
          } else if (typeof Child === 'string') {
            domElement.appendChild(setDomElementFromStringToArray(Child));
          }
        });
      }

      if (this.props.container) {
        return this.props.container.appendChild(domElement);
      }

      return domElement;
    } catch (error) {
      return this.displayError(error.message);
    }
  };
}

export default DomElement;
