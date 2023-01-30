export const chatMessage = `
<div class="chat-feed__message chat-feed__message_{{{UserRecipientOrSender}}}">
  <div class="chat-feed__message-body chat-feed__message-body_{{{UserRecipientOrSender}}}">
    <div class="chat-feed__message-text message-text_{{{UserRecipientOrSender}}}">
      <span>{{{message}}}</span>
      <span class="chat-feed__message-date {{{isDelivered}}}">{{{date}}}</span>
    </div>
  </div>
</div>
`;



