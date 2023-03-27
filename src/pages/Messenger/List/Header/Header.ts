import template from './template';
import Block from '../../../../services/Block';
import HeaderProp from './types';

class Header extends Block<HeaderProp> {
  render() {
    return this.compile(template);
  }
}

export default Header;
