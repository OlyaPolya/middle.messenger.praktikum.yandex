import Block from '../../../services/Block';
import template from './template';
import DialogProp from './types';

class Dialog extends Block<DialogProp> {
  render(): string {
    return this.compile(template);
  }
}

export default Dialog;
