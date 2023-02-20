export interface IChatUsersList {
  timestamp: number;
  sender: {
    id: string;
    client_id: string;
    avatar: string;
    name: string;
    phone: string;
  };
  message: {
    id: string;
    client_id: string;
    type: string;
    text: string;
    media: string;
    thumbnail: string;
    file_name: string;
    file_size: number;
  };
  new_messages: {
    number: number;
  }
}
