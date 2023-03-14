type ButtonProp = {
  textContent?: string;
  attr?: {
    class?: string;
    type?: string;
  };
  events?: {
    click: (e: Event) => void;
  };
};

export default ButtonProp;
