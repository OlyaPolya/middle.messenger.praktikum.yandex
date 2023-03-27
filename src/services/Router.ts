import Block from './Block';
import Route from './Route';

class Router {
  private readonly rootQuery: string = '';

  private static __instance: Router;

  private routes: Route[] = [];

  private history = window.history;

  private currentRoute: Route | null = null;

  _rootQuery: string = '';

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;
    this.rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: Block) {
    const route = new Route(pathname, block, this._rootQuery);
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event) => {
      const target = event.currentTarget as Window;
      this._onRoute(target.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default new Router('.main');
