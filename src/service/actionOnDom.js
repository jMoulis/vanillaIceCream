import { findParent } from './domNavigation';

export const deleteElement = (evtElement, callback) => {
  const elementToDelete = findParent({
    element: evtElement,
  });
  const parentElementToDelete = findParent({
    element: elementToDelete,
  });
  parentElementToDelete.removeChild(elementToDelete);
  if (callback) {
    callback();
  }
};

export const addToDom = (element, container, nextElement) => {
  if (nextElement) {
    return container.insertBefore(element, nextElement);
  }
  container.appendChild(element);
};

export const removeElement = (element, callback) => {
  const parentToDeleteFrom = findParent({ element });
  parentToDeleteFrom.removeChild(element);
  callback();
};
