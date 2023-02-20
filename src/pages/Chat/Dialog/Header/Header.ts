import template from './template';
import Block from '../../../../utils/Block';

class Header extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default Header;
