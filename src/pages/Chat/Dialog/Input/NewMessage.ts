import Block from '../../../../services/Block';
import template from './template';

class NewMessage extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default NewMessage;
