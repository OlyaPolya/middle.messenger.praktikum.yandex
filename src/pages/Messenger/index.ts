import ChatDialog from './Dialog/index';
import UsersList from './List/index';
import Messenger from './Messenger';
import './style.scss';

const MessengerPage = new Messenger('div', {
  usersList: UsersList,
  dialog: ChatDialog,
  attr: {
    class: 'chat-page',
  },
});

export default MessengerPage;
