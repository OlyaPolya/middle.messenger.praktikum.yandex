import template from './template';
import Block from '../../../../services/Block';
import DialogHeaderProp from './types';

class Header extends Block<DialogHeaderProp> {
  render(): string {
    return this.compile(template);
  }
}

export default Header;
