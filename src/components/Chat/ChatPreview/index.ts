export const chatPreview = `
<div class="chat-preview">
  <div class="chat-preview__user-image">
    {{{userImage}}}
  </div>
  <div class="chat-preview__user-info user-info chat__user-image">
    <p class="user-info__username chat__username">{{{userName}}}</p>
    <div class="user-info__user-message">{{{userSender}}}{{{userMessage}}}</div>
  </div>
  <div class="chat-preview__message-info message-info">
    <p class="message-info__message-date message-date">{{{messageDate}}}</p>
    {{{newMessages}}}
  </div>
</div>`;