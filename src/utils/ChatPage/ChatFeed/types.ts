export interface IMessage {
  timestamp: number;
  sender: {
    id: string;
    client_id?: string;
    avatar?: string;
    name: string;
    phone?: string;
    email?: string;
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
  receiver?: {
    id: string;
    client_id: string;
    avatar: string;
    name: string;
    phone: string;
    email: string;
  };
};

export interface IUserMessages {
  messages: IMessage[];
}