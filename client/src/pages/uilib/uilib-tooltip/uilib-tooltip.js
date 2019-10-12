import { bindable } from 'aurelia-framework';
import './uilib-tooltip.less';
import { infoIcon } from 'resources/icons';

export class UilibTooltip {
  @bindable value = 'UilibTooltip';

  infoIcon = infoIcon;
}
