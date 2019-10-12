import { bindable } from 'aurelia-framework';
import './joba-tooltip.less';

export class JobaTooltip {
  @bindable position = 'bottom';

  /**
   * @type {string} text to be displayed in the tooltip
   */
  @bindable text = 'Tooltip placeholder text';

  isMouseover = true; // debug
  isMouseover = false;

  created() {
  }


  showTooltip(event) {
    this.isMouseover = true;
  }

  hideTooltip(event) {
    this.isMouseover = false;
  }

  // showTooltip() {
  //   this.jobaTooltip.
  // }
}
