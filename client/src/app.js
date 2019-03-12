import { PLATFORM } from 'aurelia-pal';
import './app.less';


/**
 * - Configure Router
 */
export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router) {
    config.map([
      {
        name: 'home',
        route: '',
        moduleId: PLATFORM.moduleName('./pages/home/home')
      },
      {
        route: 'links',
        moduleId: PLATFORM.moduleName('./pages/links/links'),
        nav: true,
        title: 'Links'
      },
      {
        route: 'apps',
        moduleId: PLATFORM.moduleName('./pages/apps/apps'),
        nav: true,
        title: 'Apps'
      },
      {
        route: 'sandbox',
        moduleId: PLATFORM.moduleName('./pages/sandbox/sandbox'),
        nav: true,
        title: 'sandbox'
      },
      {
        route: 'uilib',
        moduleId: PLATFORM.moduleName('./pages/uilib/uilib'),
        nav: true,
        title: 'uilib'
      },
    ]);
    this.router = router;
  }
}
