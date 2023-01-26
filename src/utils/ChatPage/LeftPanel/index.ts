import Handlebars from 'handlebars';
import { IChatUsersList }  from './types';
import { chatPreview } from '../../../components/Chat/ChatPreview';
import { getTime } from '../../../modules/getTime';

const USER_ID_TMP = '5f283618af2c4';

export function createPreviewChatPanel(users: IChatUsersList[]): string {
  const panelTemplate = Handlebars.compile(chatPreview);
  
  const panel = users.reduce((concat, user) => {
    const isUserSend = user.message.client_id === USER_ID_TMP? '<span class="user-info__user-sender">Вы: </span>' : null;
    const message = user.message.text.length > 0 ? user.message.text : `Изображение`;
    const time = getTime(user.timestamp);
    const isShowNewMessages = user.new_messages.number > 0 ? `<div class="message-info__new-message">${user.new_messages.number}</div>` : null;
    const image = user.sender.avatar.length > 0 ? `<img src="${user.sender.avatar}" alt="user image">` : null;

    return (
      concat +
      panelTemplate({
        userImage: image,
        userName: user.sender.name,
        userSender: isUserSend,
        userMessage: message,
        messageDate: time,
        newMessages: isShowNewMessages,
      })
    );
  }, '')

  return panel
}