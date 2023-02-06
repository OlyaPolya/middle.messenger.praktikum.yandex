export default function render(selector: string, block) {
  const root: Element | null = document.querySelector(selector);

  if (root) {
    root.appendChild(block.getContent());
  }

  block.dispatchComponentDidMount();

  return root;
}
