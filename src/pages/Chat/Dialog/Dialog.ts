import Block from '../../../services/Block';
import template from './template';

class Dialog extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default Dialog;
