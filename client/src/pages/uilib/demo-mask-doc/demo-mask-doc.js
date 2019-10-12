import { bindable } from 'aurelia-framework';
import { codeIcon } from 'resources/icons';
import './demo-mask-doc.less'

export class DemoMaskDoc {
  @bindable value = 'DemoMaskDoc';

  codeIcon = codeIcon;
  showCode = false;
  showMoreOptionsMenu = false;

  toggleCodeMode() {
    this.showCode = !this.showCode;
  }
}
