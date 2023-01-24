import Handlebars from 'handlebars';
import { chatPreview } from '../components/Chat/ChatPreview';
import { ChatsListI } from '../utils/ChatPage/types';
import { getTime } from '../modules/getTime';

export function createChatsList(usersSenders: ChatsListI[]) {
  const chatListTemplate = Handlebars.compile(chatPreview);
  const chatList = usersSenders.reduce((concat, chatPreview) => {
    const isUserSender = chatPreview.sender.client_id === 'sk-1376265f-86df-4c49-a0c3-a4816df41af9' ? 'Вы: ' : null;
    const userMessageType = chatPreview.message.text.length > 0 ? chatPreview.message.text : 'Изображение';
    const newMessages = chatPreview.new_messages.number === 0 ? null : chatPreview.new_messages.number;
    const time = getTime(chatPreview.timestamp);

    return (
      concat +
      chatListTemplate({
        userImage: chatPreview.sender.avatar,
        userName: chatPreview.sender.name,
        userSender: isUserSender,
        userMessage: userMessageType,
        messageDate: time,
        newMessages: newMessages,
      })
    );
  }, '');

  const section = document.querySelector('.main');

  if (section) {
    section.innerHTML = chatList;
  }

  return chatList;
}
