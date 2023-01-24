export const chatPreview = `
<div class="chat-preview">
  <div class="chat-preview__user-image">
    <img src="{{{userImage}}}" alt="user image">
  </div>
  <div class="chat-preview__user-info user-info" chat__user-image>
    <p class="user-info__username chat__username">{{{userName}}}</p>
    <p class="user-info__user-message"><span class="user-info__user-sender">{{{userSender}}}</span>{{{userMessage}}}</p>
  </div>
  <div class="chat-preview__message-info message-info">
    <p class="message-info__message-date message-date">{{{messageDate}}}</p>
    <div class="message-info__new-message">{{{newMessages}}}
    </div>
  </div>
</div>`;