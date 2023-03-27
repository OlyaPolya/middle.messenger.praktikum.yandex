// import { template } from 'handlebars';

import Block from '../../services/Block';
import { PropsWithRouter, withRouter } from '../../utils/withRouter';

interface LinkProps extends PropsWithRouter {
    to: string;
    label: string;
  events?: {
    click: () => void;
  };
}

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super( {
      ...props ;
      events: {
        click: () => this.navigate()
      });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

const Link = withRouter(BaseLink);

export default Link;
