import { UserData } from '../api/AuthAPI';
import set from '../utils/set';
import EventBus from './EventBus';

interface State {
  user?: UserData;

  chats?: Chat[];

  selectedChatId?: number;
}

enum StoreEvent {
  Updated = 'updated'
}

class Store extends EventBus {
  state: State = {};

  set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvent.Updated, this.state);
  }

  getState(): State {
    return this.state;
  }
}

const store = new Store();
