import Header from './Header';
import HeaderProfile from './Profile/index';
import HeaderSearch from './Search/index';

const ListHeader = new Header('div', {
  profile: HeaderProfile,
  search: HeaderSearch,
  attr: {
    class: 'left-panel__chat-header left-panel-header',
  },
});

export default ListHeader;
