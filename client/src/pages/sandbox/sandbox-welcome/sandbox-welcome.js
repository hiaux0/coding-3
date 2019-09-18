import { bindable } from 'aurelia-framework';
import './sandbox-welcome.less';

export class SandboxWelcome {
  @bindable value = 'SandboxWelcome';

  activate(params) {
    if (params.viewModel) this.viewModel = `../${params.viewModel}/${params.viewModel}`;
  }
}
