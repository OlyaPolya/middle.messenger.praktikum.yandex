import Block from '../../../utils/Block';
import template from './template';

class Buttons extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default Buttons;
