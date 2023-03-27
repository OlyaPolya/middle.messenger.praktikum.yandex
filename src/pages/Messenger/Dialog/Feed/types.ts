export type Message = {
  recipientOrSender: string;
  message: string;
  isDelivered: string;
  messageTime: string;
};

type FeedProp = {
  dialogueDate: string;
  messages: Message[];
  attr: {
    class: string;
  };
};

export default FeedProp;
