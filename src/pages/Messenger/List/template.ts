const template = `
  {{{header}}}
  <div class="left-panel__chat-preview">
    {{#each items}}
      <a class="chat-preview" href="#">
        <div class="chat-preview__user-image">
          {{{userImage}}}
        </div>
        <div class="chat-preview__dialog-info">
          <div class="dialog-info">
            <div class="dialog-info__title">
              <p class="dialog-info__username">{{{userName}}}</p>
              <p class="dialog-info__date">{{{messageDate}}}</p>
            </div>
            <div class="dialog-info__message">
              <p class="dialog-info__message-text">{{{sender}}}{{{message}}}</p>
              <div class="dialog-info__badge">{{{newMessages}}}</div>
            </div>
          </div>
        </div>
      </a>
    {{/each}}
  </div>
`;
export default template;
