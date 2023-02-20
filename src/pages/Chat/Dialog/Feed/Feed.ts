import Block from '../../../../utils/Block';
import template from './template';

class Feed extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default Feed;
