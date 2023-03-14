import Block from '../../../../services/Block';
import template from './template';
import FeedProp from './types';

class Feed extends Block<FeedProp> {
  render(): string {
    return this.compile(template);
  }
}

export default Feed;
