import Handlebars from 'handlebars';
import { createFeed } from './ChatFeed/index';
import { createPreviewChatPanel } from './LeftPanel/index';
import { IChatUsersList } from './LeftPanel/types';
import { IUserMessages } from './ChatFeed/types';
import { chatListHeader } from '../../components/Chat/ChatsListHeader/index';
import { chatPageTemplate } from './ChatPageTemplate';
import './style.scss';

export function createChatPage(
  users: IChatUsersList[],
  messages: IUserMessages
) {
  const pageTemplate = Handlebars.compile(chatPageTemplate);
  const panelLeft = ''.concat(
    chatListHeader,
    '<div class="left-panel__chat-preview">',
    createPreviewChatPanel(users),
    '</div>',
  );
  const feed = createFeed(messages);

  const page = pageTemplate({
    leftPanel: panelLeft,
    centralPanel: feed,
  });

  return page;
}

