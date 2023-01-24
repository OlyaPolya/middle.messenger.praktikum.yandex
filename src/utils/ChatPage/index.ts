// <div class="chat-feed">
//     <div class="chat-feed__header">
//       <div class="chat-feed__user-info">
//         <div class="chat-feed__user-image chat__user-image">
//           <img src="{{{userImage}}}" alt="user image">
//         </div>
//         <span class="chat-feed__username chat__username">{{{userName}}}</span>
//       </div>
//       <div class="chat-feed__menu"></div>
//     </div>
//     <div class="chat-feed__body">
//       <div class="chat-feed__date"></div>
//       <div class="chat-feed__messages">{{{messages}}}</div>
//     </div>
//     <div class="chat-feed__send-message-block"></div>
//    </div>

import { usersSenders } from '../../utils/ChatPage/TemporaryChatsListUsers';
import { createChatsList } from '../../modules/createChatsList';
import { createFeed } from './ChatFeed/index';

createFeed();