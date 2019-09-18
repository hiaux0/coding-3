import { bindable } from 'aurelia-framework';
import './sandbox-welcome.less';

export class SandboxWelcome {
  @bindable value = 'SandboxWelcome';

  activate(params) {
    if (params.viewModelName) {
      const { viewModelName } = params;
      this.viewModelName = viewModelName;
      this.viewModel = `../${viewModelName}/${viewModelName}`;
    }
  }
}
