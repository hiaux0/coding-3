//@ts-check

import { bindable, containerless } from 'aurelia-framework';
import './inline-input.less';
import hotkeys from 'hotkeys-js';
import { inlineInputShortcutScope, acceptEditedInlineInputShortcut, cancelInlineInputEditModeShortcut } from './inline-input.shortcuts';

@containerless
export class InlineInput {
  /** @type {string} */
  @bindable classList;

  @bindable isInlineInputMode = false;

  /** @type {string} */
  @bindable placeholder = '';

  /** callback when inline input value is accepted */
  @bindable updateValue;

  /** @type {string} */
  @bindable value = '';

  /**
   * @type {string}
   * The old value of the inline input.
   * Need it to be able to 'cancel' edition and revert the value.
   */
  oldValue;

  /** @type {HTMLElement} */
  inlineInputRef;

  /** @type {string} */
  previousScope;

  attached() {
    if (this.isInlineInputMode) {
      // Timeout else, the input does not focus, rather the content will get selected.
      window.setTimeout(() => {
        this.inlineInputRef.focus();
      }, 0);
    }

    this.oldValue = this.value;
  }


  /**
   * Set input mode to true, and focus the input.
   *
   * Used: When there is a list, I want to quickly edit the list item.
   * TODO: [LOW] Use edit button to activate the edit mode.
   */
  activateInlineInputMode() {
    this.isInlineInputMode = true;
    // Timeout else, the input does not focus, rather the content will get selected.
    window.setTimeout(() => {
      this.inlineInputRef.focus();
    }, 0);
  }

  updateInlineInputAfterShortcut() {
    this.oldValue = this.value;

    this.previousScope = hotkeys.getScope();
    hotkeys.setScope(inlineInputShortcutScope);

    hotkeys(acceptEditedInlineInputShortcut, inlineInputShortcutScope, async() => {
      if (this.value === '') return console.error('No empty input.');

      await this.updateValue(this.value);
      this.isInlineInputMode = false;
      this.oldValue = this.value;

      hotkeys.setScope(this.previousScope);
      // @ts-ignore blur does not exist on type Element.
      document.activeElement.blur();
      hotkeys.unbind(acceptEditedInlineInputShortcut, inlineInputShortcutScope);
    });

    hotkeys(cancelInlineInputEditModeShortcut, inlineInputShortcutScope, () => {
      this.value = this.oldValue;
      this.isInlineInputMode = false;

      hotkeys.unbind(cancelInlineInputEditModeShortcut, inlineInputShortcutScope);
    });
  }

  onBluInlineInput() {
    if (this.value === '') return console.error('No empty input.');

    this.value = this.oldValue;
    this.isInlineInputMode = false;

    hotkeys.unbind(acceptEditedInlineInputShortcut, inlineInputShortcutScope);
    hotkeys.unbind(cancelInlineInputEditModeShortcut, inlineInputShortcutScope);
    hotkeys.setScope(this.previousScope);
  }
}
