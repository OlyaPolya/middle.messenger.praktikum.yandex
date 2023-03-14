import Block from '../../services/Block';
import template from './template';
import { ProfileProp } from './types';

class Profile extends Block<ProfileProp> {
  render(): string {
    return this.compile(template);
  }
}

export default Profile;
