//@ts-check

import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { RouterEvent } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import './app.less';
import { refreshJumpable } from 'components/features/jumpable/jumpable.js';
import { CommandCentral } from 'components/features/command-palett/command-palett';


/**
 * - Configure Router
 */
@inject(CommandCentral, EventAggregator)
export class App {
  subscriptions = [];

  /**
   * @param {CommandCentral} commandCentral
   * @param {EventAggregator} eventAggregator
   */
  constructor(commandCentral, eventAggregator) {
    this.commandCentral = commandCentral;
    this.eventAggregator = eventAggregator;
    this.message = 'Hello World!';
  }

  bind() {
    this.attachEvents();
  }

  attached() {
    this.commandCentral.subscribeToCommandEvents({});
  }


  detached() {
    this.subscriptions.forEach(sub => sub.dispose());
  }

  /**
   * @param {object} router https://aurelia.io/docs/api/router/class/Router
   */
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
        route: 'sandbox/*viewModelName', moduleId: PLATFORM.moduleName('./pages/sandbox/sandbox-welcome/sandbox-welcome')
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

  attachEvents() {
    this.subscriptions.push(
      // https://aurelia.io/docs/routing/configuration#router-events
      this.eventAggregator.subscribe(RouterEvent.Success, (ev) => {
        /** 1. Refresh jumpable after each navigation */
        window.setTimeout(() => {
          refreshJumpable();
        }, 0);
      })
    );
  }
}


/**
 * 1. I want to use jump marks after each navigation
 */
