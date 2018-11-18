const replaceUppercaseCharacterByLowerCaseAndSymbol = (char, symbole) => {
  return Array.from(char).reduce((response, value) => {
    if (value === value.toUpperCase()) {
      return `${response}${symbole}${value.toLowerCase()}`;
    }
    return `${response}${value}`;
  }, '');
};

const randomClassName = () => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; i += 1)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};
export const setDomElementFromStringToArray = str =>
  new DOMParser().parseFromString(str, 'text/html').body.childNodes[0];

export const parseEvent = eventString =>
  eventString.replace('on', '').toLowerCase();

export const parseCssSelectorCamelCase = selectorObject => {
  let classNameToString = '';
  Object.keys(selectorObject).forEach(key => {
    classNameToString = `${replaceUppercaseCharacterByLowerCaseAndSymbol(
      key,
      '-',
    )}:${selectorObject[key]};${classNameToString}`;
  });
  return `${classNameToString}`;
};

export const style = styleObject => {
  const className = randomClassName();
  const sheet = document.createElement('style');
  sheet.innerHTML = `.${className} {${parseCssSelectorCamelCase(styleObject)}}`;
  sheet.setAttribute('title', 'data-css');
  document.head.appendChild(sheet);
  return className;
};

export const findStyleSheetByTitle = (styleSheets, title) => {
  for (let i = 0; i < styleSheets.length; i += 1) {
    const sheet = document.styleSheets[i];
    if (sheet.title === title) {
      return sheet;
    }
  }
};

export const componentDidChange = (targetNode, config, aknowledgement) => {
  const callback = mutationList => {
    // eslint-disable-next-line no-restricted-syntax
    for (const mutation of mutationList) {
      if (mutation.type === 'childList') {
        aknowledgement(mutation);
        console.log('A child node has been added or removed');
      } else if (mutation.type === 'attributes') {
        console.log(`The ${mutation.attributeName} attribute was modified`);
      }
    }
  };
  const observer = new MutationObserver(callback);
  return observer.observe(targetNode, config);
};
