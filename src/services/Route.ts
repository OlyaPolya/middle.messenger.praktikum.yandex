import Block from './Block';

interface BlockConstructable<P extends Record<string, any> = any> {
  new (props: P): Block;
}

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function render({ query, block }: { query: string; block: Block }) {
  const root = document.querySelector(query);
  if (root) {
    // root.textContent = block.getContent();
    root.append(block.getContent()!);
    return root;
  }
  return false;
}

// class Route<P extends Record<string, any> = any> {
//   private pathname: string = '';

//   private readonly blockClass: Block;

//   private block: Block | null = null;

//   props: Props<P>;

//   constructor(pathname: string, view: Block, props: Props<P>) {
//     this.pathname = pathname;
//     this.blockClass = view;
//     this.block = null;
//     this.props = props;
//   }

//   navigate(pathname: string) {
//     if (this.match(pathname)) {
//       this.pathname = pathname;
//       this.render();
//     }
//   }

//   leave() {
//     if (this.block) {
//       this.block.hide();
//     }
//   }

//   match(pathname: string) {
//     return isEqual(pathname, this.pathname);
//   }

//   render() {
//     if (!this.block) {
//       this.block = new this.blockClass();
//       render({ query: this.props.rootQuery, block: this.block });
//       return;
//     }

//     this.block.show();
//   }
// }

class Route<P extends Record<string, any> = any> {
  // private pathname: string = '';

  // private readonly blockClass: Block;

  private block: Block | null = null;

  pathname: string;

  blockClass: Block;

  props: string;

  // props: Props<P>;

  constructor(pathname: string, view: Block, props: string) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = null;
    this.props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass();
      render(this.props, this.block);
      return;
    }

    this.block.show();
  }
}

export default Route;
