import Block from '../../services/Block';
import template from './template';

class Messenger extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default Messenger;
