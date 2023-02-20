import Block from '../../../utils/Block';
import template from './template';

class Dialog extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default Dialog;
