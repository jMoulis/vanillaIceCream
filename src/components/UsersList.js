import ComponentType from './ComponentType';
import DomElement from './DomElement';

class UsersList extends ComponentType {
  constructor(users) {
    super(users);
    this.users = users;
  }

  buildChildren = () => {
    // console.log(this.users);
    return this.users.map(user => {
      const userNameElement = new DomElement({
        tagName: 'span',
        attributes: {
          'data-user': 'userName',
          textContent: user.name,
        },
      });
      const userAgeElement = new DomElement({
        tagName: 'span',
        attributes: {
          'data-user': 'userAge',
          textContent: user.age,
        },
      });
      const userBoxElement = new DomElement({
        tagName: 'div',
        children: [userNameElement, userAgeElement],
      });

      return new DomElement({
        tagName: 'li',
        children: [userBoxElement],
      });
    });
  };

  render = () => {
    const ul = new DomElement({
      tagName: 'ul',
      attributes: {},
      children: this.buildChildren(),
    }).render();
    return ul;
  };
}

export default UsersList;
