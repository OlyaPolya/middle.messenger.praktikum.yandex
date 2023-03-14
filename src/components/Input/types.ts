type InputProp = {
  attr?: {
    [key: string]: string;
  };
  events?: {
    blur: (e: Event) => void;
    focus: (e: Event) => void;
  };
};

export default InputProp;
