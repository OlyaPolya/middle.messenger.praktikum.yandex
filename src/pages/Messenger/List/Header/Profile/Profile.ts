import Block from '../../../../../services/Block';
import template from './template';
import HeaderProfileProp from './types';

class Profile extends Block<HeaderProfileProp> {
  render(): string {
    return this.compile(template);
  }
}

export default Profile;
