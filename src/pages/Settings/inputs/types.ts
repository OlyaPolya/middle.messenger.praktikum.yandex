import Wrap from '../../../components/Input/Wrap';

type InputsProp = {
  email?: Wrap;
  login?: Wrap;
  firstName?: Wrap;
  secondName?: Wrap;
  displayName?: Wrap;
  phone?: Wrap;
  oldPassword?: Wrap;
  newPassword?: Wrap;
  repeatPassword?: Wrap;
  attr: {
    class: string;
  };
};

export default InputsProp;
