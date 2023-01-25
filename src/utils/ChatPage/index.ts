import Handlebars from 'handlebars';
import { createFeed } from './ChatFeed/index';
import { createPreviewChatPanel } from './LeftPanel/index';
import { IChatUsersList } from './LeftPanel/types';
import { IUserMessages } from './ChatFeed/types';
import { chatListHeader } from '../../components/Chat/ChatsListHeader/index';
import { chatPageTemplate } from './ChatPageTemplate';

export function createChatPage(users: IChatUsersList[], messages: IUserMessages) {
  const pageTemplate = Handlebars.compile(chatPageTemplate);
  const panelLeft = ''.concat(chatListHeader, createPreviewChatPanel(users));
  const feed = createFeed(messages);

  const page = pageTemplate({
    leftPanel: panelLeft,
    centralPanel: feed,
  });

  return page;
}
