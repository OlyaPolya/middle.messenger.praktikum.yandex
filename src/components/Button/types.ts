type ButtonProp = {
  [key: string]: {
    textContent?: string;
    attr?: {
      class?: string;
      type?: string;
    };
    events?: {
      click: () => void;
    };
  };
};

export default ButtonProp;
