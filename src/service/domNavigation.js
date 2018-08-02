export const findParent = ({ element }) => {
  return element.parentNode;
};

export const findAnElement = ({ element, tagTarget }) => {
  let parent;
  for (let i = 0; i < element.parentNode.children.length; i += 1) {
    if (
      element.parentNode.children[i].tagName.toLowerCase() ===
      tagTarget.toLowerCase()
    ) {
      parent = element.parentNode.children[i];
    }
  }
  return parent;
};

export const findNextElement = element => {
  return element.nextSibling;
};
export const findNextElementPosition = element => {
  if (element && element.nextSibling) {
    return element.nextSibling.dataset.position;
  }
  return null;
};
export const findPrevElement = element => {};
