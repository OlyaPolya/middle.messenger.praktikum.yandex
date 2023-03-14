import receiveDate from '../../../utils/receiveDate';
import { ChatsList, User } from '../types';

function getUsersList(list: ChatsList) {
  const users: User[] = [];
  const CURRENT_USER_LOGIN_TMP = 'currentUserLogin';

  list.forEach((item) => {
    const isCurrentUserSend = item.last_message.user.login === CURRENT_USER_LOGIN_TMP
      ? '<span class="user-info__user-sender">Вы: </span>'
      : null;
    const isShowNewMessages = item.unread_count > 0
      ? `<div class="message-info__new-message">${item.unread_count}</div>`
      : null;
    const image = item.avatar.length > 0
      ? `<img src="${item.avatar}" alt="user image">`
      : null;
    const user = {
      userImage: image,
      userName: `${item.last_message.user.first_name} ${item.last_message.user.second_name}`,
      messageDate: receiveDate(item.last_message.time),
      sender: isCurrentUserSend,
      message: item.last_message.content,
      newMessages: isShowNewMessages,
    };

    users.push(user);
  });

  return users;
}

export default getUsersList;
