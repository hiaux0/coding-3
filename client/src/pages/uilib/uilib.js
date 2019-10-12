//@ts-check

import { bindable, PLATFORM } from 'aurelia-framework';
import './uilib.less';


export class Uilib {
  @bindable value = 'Uilib';

  configureRouter(config, router) {
    config.map([
      {
        name: 'uilibWelcome',
        route: '',
        moduleId: PLATFORM.moduleName('./uilib-welcome/uilib-welcome'),
        nav: true
      },
    ]);
    this.router = router;
  }
}
