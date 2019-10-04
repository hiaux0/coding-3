//@ts-check
import { bindable } from 'aurelia-framework';
import './sb-inline-input.less';
import { marjorArcana } from '../sb-tarot/tarot-resources/arcana-definitions';

export class SbInlineInput {
  @bindable value = 'SbInlineInput';

  majorArcana = marjorArcana;

  updateValue(value) {
    console.log('TCL: SbInlineInput -> updateValue -> value', value);
  }
}
