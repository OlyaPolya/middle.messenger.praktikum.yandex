import Block from '../../../../services/Block';
import template from './template';
import InputProp from './types';

class NewMessage extends Block<InputProp> {
  render(): string {
    return this.compile(template);
  }
}

export default NewMessage;
