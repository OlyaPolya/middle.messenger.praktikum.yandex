type ButtonAttr = {
  class?: string;
  type?: string;
};

type Events = {
  click?: (e: any) => void
};

export type Button = {
  [key: string]: {
    textContent?: string;
    attr?: ButtonAttr;
    events?: Events;
  };
};

type InputAttr = ButtonAttr & {
  name?: string;
  value?: string;
};

export type Input = {
  [key: string]: {
    label: {
      textContent?: string;
      attr?: InputAttr;
      events?: Events;
    };
    input: {
      textContent?: string;
      attr?: InputAttr;
      events?: Events;
    };
  };
};
