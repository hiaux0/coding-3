import { bindable } from 'aurelia-framework';
import './uilib-welcome.less';

export class UilibWelcome {
  @bindable value = 'UilibWelcome';

  activate(params) {
    if (params.viewModelName) {
      const { viewModelName } = params;
      console.log('TCL: UilibWelcome -> activate -> viewModelName', viewModelName);
      this.viewModelName = viewModelName;
      this.viewModel = `../${viewModelName}/${viewModelName}`;
    }
  }
}
