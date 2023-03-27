import HeaderProfile from './Profile/Profile';
import HeaderSearch from './Search/Search';

type HeaderProp = {
  profile: HeaderProfile;
  search: HeaderSearch;
  attr: {
    class: string;
  };
};

export default HeaderProp;
