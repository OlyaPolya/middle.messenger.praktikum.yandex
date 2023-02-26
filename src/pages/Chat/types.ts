export type ChatsList = Chat[];
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

export type DialogList = Dialog[];

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

export type Message = {
  recipientOrSender: string;
  message: string;
  isDelivered: string;
  messageTime: string;
};

export type User = {
  userImage: string | null;
  userName: string;
  messageDate: string;
  sender: string | null;
  message: string;
  newMessages: string | null;
};
