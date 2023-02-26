import Block from '../../services/Block';
import template from './template';

class Chat extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default Chat;
