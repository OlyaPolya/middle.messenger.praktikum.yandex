import Block from '../../utils/Block';
import template from './template';

class Chat extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default Chat;
