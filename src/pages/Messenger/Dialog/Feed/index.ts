import Feed from './Feed';
import getMessagesList from '../../utils/getMessagesList';
import dialog from '../../APITemplate/Dialogue';

const DialogFeed = new Feed('div', {
  dialogueDate: '19 июня',
  messages: getMessagesList(dialog),
  attr: {
    class: 'chat-feed__body'
  },
},);

export default DialogFeed;
