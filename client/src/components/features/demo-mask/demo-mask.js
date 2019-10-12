import { bindable } from 'aurelia-framework';
import { codeIcon } from 'resources/icons';
import './demo-mask.less';

export class DemoMask {
  /**
   * @type {String} codeLang ['js', 'css', 'xml']
   */
  @bindable codeLang = 'xml'

  /**
   * @type {String} codeConent of what you want to display
   * Note the `\n`, because in the view it is easier to read the code when we do
   *   code-content='
   * <span>...
   *   '
   * there is a new line added above.
   */
  @bindable codeContent = '\n<span>WHAT</span>'

  /**
   * @type {boolean} showCode
   */
  @bindable showCode = false;

  codeIcon = codeIcon;

  bind() {
    console.log(this);
  }

  toggleDocCode() {
    console.log('TCL: DemoMask -> toggleDocCode -> toggleDocCode');
    this.showCode = !this.showCode;
  }
}
