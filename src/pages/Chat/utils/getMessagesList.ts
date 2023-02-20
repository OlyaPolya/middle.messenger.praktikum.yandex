import receiveDate from '../../../utils/receiveDate';
import receiveDate from '../../../utils/receiveTime';

const CURRENT_USER_TEMP_ID = '86a0caef-41ec-49ac-814b-b27da2cea267';

function getMessagesList(list) {
  const messages = [];

  list.forEach((item) => {
    const messageBody = item.message.text.length > 0
      ? item.message.text
      : `<img src="${item.message.media}" alt="image from user">`;
    const recipientOrSender = item.sender.id === CURRENT_USER_TEMP_ID ? 'recipient' : 'sender';
    const markCheckBox = item.sender.id === CURRENT_USER_TEMP_ID
      ? 'message-date__delivered'
      : 'message-date__delivered-not';

    const time = receiveDate(new Date(item.timestamp));
    console.log(time);

    const message = {
      recipientOrSender,
      message: messageBody,
      isDelivered: markCheckBox,
      messageTime: time,
    };

    messages.push(message);
  });

  console.log(messages);

  return messages;
}

export default getMessagesList;
