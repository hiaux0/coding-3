import {bindable} from 'aurelia-framework';
import './mat-input.less';

export class MatInput {
  @bindable value = 'MatInput';

  setText() {
    this.textValue = 'something';
  }
  setDisabled() {
    this.disabledValue = !this.disabledValue;
  }
}
