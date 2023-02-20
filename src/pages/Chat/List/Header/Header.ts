import template from './template';
import Block from '../../../../utils/Block';

class Header extends Block {
  render() {
    return this.compile(template);
  }
}

export default Header;
