import ListHeader from './Header/Header';

export type ListProp = {
  header: ListHeader;
  items: User[];
  attr: {
    class: string;
  };
};

export type User = {
  userImage: string | null;
  userName: string;
  messageDate: string;
  sender: string | null;
  message: string;
  newMessages: string | null;
};

type Dialog = {
  timestamp: string;
  sender: {
    id: string;
    client_id?: string;
    avatar?: string;
    name: string;
    phone?: string;
    email?: string;
  };
  receiver?: {
    id: string;
    client_id: string;
    avatar: string;
    name: string;
    phone: string;
    email: string;
  };
  message: {
    id: string;
    client_id: string;
    type: string;
    text: string;
    media: string;
    thumbnail: string;
    file_name: string;
  };
};
export type DialogList = Dialog[];
