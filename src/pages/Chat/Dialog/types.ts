import DialogFeed from './Feed/Feed';
import DialogHeader from './Header/Header';
import DialogInput from './Input/NewMessage';

type DialogProp = {
  header: DialogHeader;
  feed: DialogFeed;
  input: DialogInput;
  attr: {
    class: string;
  };
};

export default DialogProp;
