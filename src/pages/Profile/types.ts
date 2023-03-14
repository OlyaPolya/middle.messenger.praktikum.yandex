import Inputs from './inputs/Inputs';
import Buttons from './buttons/Buttons';

export type ProfileProp = {
  inputs?: Inputs;
  buttons?: Buttons;
  attr?: {
    class: string;
  };
  events?: {
    click: (e: Event) => void;
  };
};
