import { bindable, inject, observable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { commandList } from 'resources/commandStorage/command-storage';
import { COMMAND_PALETT, ESCAPE } from 'resources/keybindings/app.keys';
import { toggleHotkeyScope } from 'components/features/jumpable/toggle-scope';
import hotkeys from 'hotkeys-js';

import './command-palett.less';

const COMMAND_PALETT_SCOPE = 'command-palett';

@inject(EventAggregator)
export class CommandPalett {
  @bindable value;
  @observable commandId;

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.simpleCommand = null;
    this.showCommandPalett = false;
    this.key = 'name';
  }

  commandIdChanged() {
    this.eventAggregator.publish('command-palett:command-triggered', this.commandId);
    this.showCommandPalett = false;
    this.commandId = ''; // reset the commandId

    let previousScope = hotkeys.getScope();

    toggleHotkeyScope(this.showCommandPalett, COMMAND_PALETT_SCOPE, previousScope);
  }

  attached() {
    this.simpleCommand = commandList.simpleCommand;
    this.initKeyBinding();
    this.debugMode();
  }

  initKeyBinding() {
    // Init hotkeys
    let keyBinding = hotkeys.noConflict();
    hotkeys.filter = function () { return true; }; // 2018-08-09 23:30:46 what does this do?
    let previousScope = hotkeys.getScope();

    keyBinding(COMMAND_PALETT, () => {
      this.showCommandPalett = !this.showCommandPalett;

      if (!this.showCommandPalett) {
        hotkeys.setScope(previousScope);
      }
      // TODO a1ab98jhc : Check if hotkeys dont accumulate
    });

    keyBinding(ESCAPE, () => {
      previousScope = hotkeys.getScope();
      hotkeys.setScope(previousScope);
      document.activeElement.blur();
    });
  }

  debugMode() {
    if (!window.DEBUG_MODE.commandPalett) return;
    // debug code, always show command palett. Note that just by setting the constructor value to true, doesn't work, since it seems like component are not loading in order
    window.setTimeout(() => {
      this.showCommandPalett = true;
    }, 0);
  }
}

export * from './command-central.js';
