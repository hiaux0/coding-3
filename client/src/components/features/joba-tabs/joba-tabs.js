/**
 * @typedef {object} Tab
 * @prop {string} title
 */

import { bindable } from 'aurelia-framework';
import './joba-tabs.less';

export class JobaTabs {
  @bindable value = 'JobaTabs';

  /** @type {Tab[]} */
  @bindable tabs;

  /** @type {Tab} */
  @bindable activeTab = 0;

  // @bindable setActiveTab;

  setActiveTab(tabIndex) {
    console.log("TCL: JobaTabs -> setActiveTab -> tabIndex", tabIndex)
    this.activeTab = tabIndex;

  }
}
