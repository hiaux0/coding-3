import { bindable } from 'aurelia-framework';
import './uilib-tabs.less';

export class UilibTabs {
  @bindable value = 'UilibTabs';

  activeTab = 0;

  exampleTabsOne = [
    { title: 'Tab One' },
    { title: 'Tab Two' },
    { title: 'Tab Three' },
  ];

  setActiveTab(activeTab) {
    console.log("TCL: UilibTabs -> setActiveTab -> activeTab", activeTab)
    this.activeTab = activeTab;
  }
}
