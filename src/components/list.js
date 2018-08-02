import Ul from '../service/Ul';
import Li from '../service/Li';

const list = new Ul({
  tag: 'ul',
  attributes: {
    id: 'list-1',
    name: 'list',
  },
  children: [
    new Li({
      attributes: { id: 'list-item-1' },
      children: [document.createTextNode('Click Me')],
      actions: {
        onclick: () => console.log('li click'),
      },
    }).create(),
    new Li({
      attributes: { id: 'list-item-2' },
      children: [document.createTextNode('Click Me')],
      actions: {
        onclick: () => console.log('li click'),
      },
    }).create(),
  ],
});

document.getElementById('root').appendChild(list.create());

export default list;
