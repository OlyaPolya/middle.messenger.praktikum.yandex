import ChatDialog from './Dialog/Dialog';
import UsersList from './List/List';

export type ChatProp = {
  usersList: UsersList,
  dialog: ChatDialog,
  attr: {
    class: string;
  },
};

type Chat = {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  };
};
export type ChatsList = Chat[];
