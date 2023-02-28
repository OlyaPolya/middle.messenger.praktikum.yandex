import Block from '../../services/Block';
import template from './template';

class Profile extends Block {
  render(): string {
    return this.compile(template);
  }

  _addEvents(): void {
    this._element.querySelectorAll('input').forEach((input) => {
      input.addEventListener('focus', this._props.events.focus);
    });
    this._element.querySelectorAll('input').forEach((input) => {
      input.addEventListener('blur', this._props.events.blur);
    });
    this._element.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', this._props.events.click);
    });
  }
}

export default Profile;
