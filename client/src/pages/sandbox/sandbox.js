//@ts-check

import { bindable, PLATFORM } from 'aurelia-framework';
import './sandbox.less';


export class Sandbox {
  @bindable value = 'Sandbox';

  configureRouter(config, router) {
    config.map([
      {
        name: 'sandboxWelcome',
        route: '',
        moduleId: PLATFORM.moduleName('./sandbox-welcome/sandbox-welcome'),
        nav: true
      },
    ]);
    this.router = router;
  }
}
