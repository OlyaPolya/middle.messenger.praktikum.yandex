const template = `
    <div class="chat-feed__date">{{{dialogueDate}}}</div>
    {{#each messages}}
      <div class="chat-feed__message chat-feed__message_{{{recipientOrSender}}}">
        <div class="chat-feed__message-body chat-feed__message-body_{{{recipientOrSender}}}">
          <div class="chat-feed__message-text message-text_{{{recipientOrSender}}}">
            <span>{{{message}}}</span>
            <span class="chat-feed__message-date {{{isDelivered}}}">{{{messageTime}}}</span>
          </div>
        </div>
      </div>
    {{/each}}
`;

export default template;
