import HTTP from 'modules/http';
import BaseAPI from './BaseApi';

const chatMessagesAPIInstance = new HTTP('api/v1/messages');

class ChatMessagesAPI extends BaseAPI {
  request({ id }) {
    return chatMessagesAPIInstance.get(`/${id}`);
  }
}

export default ChatMessagesAPI;
