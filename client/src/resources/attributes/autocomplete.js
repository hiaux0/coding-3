import { bindable, inject } from 'aurelia-framework';
import { debounce } from 'lodash-decorators';

@inject(Element)
export class AutocompleteCustomAttribute {
  @bindable list;
  @bindable value;
  @bindable suggestedList;
  @bindable key;

  /**
   * As we allow different types in a `list`, this variable provides the key for the actual content in an Object.
   * @param {String}
   */
  @bindable key;
  /**
   * The complete list you want to search in, accepts: ["", "",...], [Object, Object,...]
   * @param {Array}
   */
  @bindable list;
  /**
   * After filtration, the remaining results.
   * @param {Array}
   */
  @bindable suggestList;
  /**
   * The current value/symbol in the input field.
   * @param {String}
   */
  @bindable value;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.preparedList = this.prepareList();
  }

  /**
   * Allow the list, which should be autocomplete, to be as flexibel as possible.
   */
  prepareList() {
    if (!this.list[0][this.key]) throw new Error('Key not present');

    let key = this.key || '';
    // if (!typeof this.list[0] !== 'object') return;

    return this.list.map((listItem) => ({
      name: listItem[key],
      id: listItem.id,
    }));
  }

  @debounce(66)
  valueChanged(newValue, oldValue) {
    let ignoreCase = newValue.toLowerCase();
    this.suggestedList = this.filterByUserInput(ignoreCase);
  }

  suggestedListChanged(newValue) {
  }


  /**
   * @param {string} input
   *
   * @example
   * input // what i t
   * padWithRegexWildCard(input) // w.*h.*a.*t.* .*i.* .*t.*
   */
  padWithRegexWildCard(input) {
    /** TODO SUPPORT FOR ? */
    // const edgeCaseList = ['?'];

    const splitByChar = input.split('');
    const withWildCard = splitByChar.join('.*');
    return withWildCard + '.*';
  }

  /**
   * @param {string} input
   */
  filterByUserInput(value) {
    const wildCardValue = this.padWithRegexWildCard(value);
    const fileredList = this.preparedList.filter(listItem => {
      const ignoreCase = listItem.name.toLowerCase();
      const searchRegex = new RegExp(`${wildCardValue}`);
      return searchRegex.exec(ignoreCase);
    });
    return fileredList;
  }

  detached() {
    this.suggestedList = this.list;
  }
}
