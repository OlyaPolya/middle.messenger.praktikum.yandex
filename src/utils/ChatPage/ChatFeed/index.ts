import Handlebars from 'handlebars';
import { chatFeed } from '../../../utils/ChatPage/ChatFeed/ChatFeedTemplate';
import { getHour } from '../../../modules/getHour';
import { chatMessage } from '../../../components/Chat/ChatMessage';
import { IUserMessages } from './types';
import { sendFieldTemplate } from '../ChatFeed/SendBlockTemplate';

const CURRENT_USER_TEMP_ID = '86a0caef-41ec-49ac-814b-b27da2cea267';

export function getMessages(userMessages: IUserMessages) {
  const messageTemplate = Handlebars.compile(chatMessage);

  const chatList = userMessages.messages.reduce((concat, message) => {
    const time = getHour(message.timestamp);
    const messageType = message.message.text.length > 0 ? message.message.text : `<img src="${message.message.media}" alt="image from user">`;
    const isUserRecipientOrSender = message.sender.id === CURRENT_USER_TEMP_ID ? 'recipient' : 'sender';
    const chowCheckboxReading = message.sender.id === CURRENT_USER_TEMP_ID ? 'message-date__delivered' : 'message-date__delivered-not';

    return (
      concat +
      messageTemplate({
        UserRecipientOrSender: isUserRecipientOrSender,
        message: messageType,
        isDelivered: chowCheckboxReading,
        date: time,
      })
    );

  }, '');

  return chatList;
}

function getMessageSendBlock() {
  const sendBlockTemplate = Handlebars.compile(sendFieldTemplate);
  const sendBlock = sendBlockTemplate({});

  return sendBlock;
}

export function createFeed(userMessages: IUserMessages) {
  const chatTemplate = Handlebars.compile(chatFeed);
  const messageList = getMessages(userMessages);
  const sendMessageBlock = getMessageSendBlock();

  const chatFeedTemplate = chatTemplate({
    messages: messageList,
    messageSendBlock: sendMessageBlock,
  });

  return chatFeedTemplate;
}
