import Block from '../../services/Block';
import template from './template';
import { ProfileProp } from './types';

class Profile extends Block<ProfileProp> {
  render(): string {
    return this.compile(template);
  }

  addEvents(): void {
    this.element?.querySelectorAll('input').forEach((input) => {
      if (this.props.events !== undefined) {
        input.addEventListener('focus', this.props.events.focus);
      }
    });
    this.element?.querySelectorAll('input').forEach((input) => {
      if (this.props.events !== undefined) {
        input.addEventListener('blur', this.props.events.blur);
      }
    });
    this.element?.querySelectorAll('button').forEach((button) => {
      if (this.props.events !== undefined) {
        button.addEventListener('click', this.props.events.click);
      }
    });
  }
}

export default Profile;
