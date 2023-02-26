import Block from '../../../services/Block';
import template from './template';

class Inputs extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default Inputs;
