import Block from '../../../../../utils/Block';
import template from './template';
// import './style.scss';

class Profile extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default Profile;
