export const chatFeed = `
   <div class="chat-feed">
    <div class="chat-feed__header chat-header">
      <div class="chat-header__user-info">
        <div class="chat-header__user-image chat__user-image">
        </div>
        <span class="chat-header__username chat__username">Менеджер Василий</span>
      </div>
      <div class="chat-header__menu"></div>
    </div>
    <div class="chat-feed__body">
      <div class="chat-feed__date">19 Июня</div>
      {{{messages}}}
    </div>
    <div class="chat-feed__send-message-block">{{{messageSendBlock}}}</div>
   </div>
`;

