import Dialog from './Dialog';
import DialogFeed from './Feed/index';
import DialogHeader from './Header/index';
import DialogInput from './Input/index';

const ChatDialog = new Dialog('div', {
  header: DialogHeader,
  feed: DialogFeed,
  input: DialogInput,
  attr: {
    class: 'chat-page__central-panel central-panel',
  },
});

export default ChatDialog;
