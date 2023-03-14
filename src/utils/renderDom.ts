import Block from '../services/Block';

export default function renderDOM(selector: string, block: Block) {
  const root: Element | null = document.querySelector(selector);

  if (root) {
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(block.getContent()!);
    block.dispatchComponentDidMount();
  }

  return root;
}
