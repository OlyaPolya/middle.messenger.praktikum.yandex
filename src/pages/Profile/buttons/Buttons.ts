import Block from '../../../services/Block';
import template from './template';
import ButtonProp from './types';

class Buttons extends Block<ButtonProp> {
  render(): string {
    return this.compile(template);
  }
}

export default Buttons;
