import List from './List';
import ListHeader from './Header/index';
import list from '../APITemplate/ChatsList';
import getUsersList from '../utils/getUsersList';

const UsersList = new List('div', {
  header: ListHeader,
  items: getUsersList(list),
  attr: {
    class: 'chat-page__left-panel left-panel',
  },
});

export default UsersList;
