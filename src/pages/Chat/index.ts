import ChatDialog from './Dialog/index';
import UsersList from './List/index';
import Chat from './Chat';
import './style.scss';

const ChatPage = new Chat('div', {
  usersList: UsersList,
  dialog: ChatDialog,
  attr: {
    class: 'chat-page',
  },
});

export default ChatPage;
