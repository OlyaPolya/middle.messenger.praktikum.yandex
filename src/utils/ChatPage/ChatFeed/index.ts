import Handlebars from 'handlebars';
import { chatPreview } from '../../../components/Chat/ChatPreview';
import { ChatsListI } from '../../../utils/ChatPage/types';
import { userMessages } from '../../../utils/ChatPage/ChatFeed/TemporaryFeedMessageTemplate';
import { chatFeed } from '../../../utils/ChatPage/ChatFeed/ChatFeedTemplate';
import { getHour } from '../../../modules/getHour';
import { chatSenderMessage,  chatRecipientMessage } from '../../../components/Chat/ChatMessage';

const CURRENT_USER_TEMP_ID = '86a0caef-41ec-49ac-814b-b27da2cea267';

export function getMessages (/*insert template*/) {
  const messageReceiveTemplate = Handlebars.compile(chatRecipientMessage);
  const messageSenderTemplate = Handlebars.compile(chatSenderMessage);
  const isDelivered = '&#10003;'

  const chatList = userMessages.messages.reduce((concat, message) => {
    const time = getHour(message.timestamp);
    const userMessageType = message.message.text.length > 0 ? message.message.text : message.message.media;
    if (message.sender.id === CURRENT_USER_TEMP_ID) {
      return (
        concat +
        messageReceiveTemplate({
          message: userMessageType,
          isDelivered: isDelivered,
          date: time,

        })
      );
     }
  
    return (
      concat +
      messageSenderTemplate({
        message: userMessageType,
        date: time,
      })
    );
  }, '');

  return chatList;
  
}

export function createFeed(/*insert template*/) {
  const chatFeedTemplate = Handlebars.compile(chatFeed);

  const chatList = userMessages.messages.reduce((concat, message) => {
    const messageList = getMessages()
    return (
      concat +
      chatFeedTemplate({
        messages: messageList,
        messageSendBlock: '<kjr',
      })
    );
  }, '');

  const section = document.querySelector('.main');

  if (section) {
    section.innerHTML = chatList;
  }

  return chatList;
}

//./assets/img/user.png