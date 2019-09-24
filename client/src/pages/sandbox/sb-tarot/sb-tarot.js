//@ts-check

import { bindable } from 'aurelia-framework';
import {
  fetchListTarotCards,
  apiAddTarotCard,
  apiUpdateTarotExplanation,
  apiAddTarotCardExplanation,
} from './tarot.gateway';
import { refreshJumpable } from 'components/features/jumpable/jumpable.js';
import hotkeys from 'hotkeys-js';
import { acceptEditedTarotShortcut, tarotShortcutScope } from './tarot-shortcuts';


import './sb-tarot.less';

export class SbTarot {
  @bindable value = 'SbTarot';

  selectedCard;

  selectedExplanation;

  tarotCards;

  async bind() {
    const tarotCards = await fetchListTarotCards();
    console.log('TCL: SbTarot -> bind -> tarotCards', tarotCards);
    this.tarotCards = tarotCards;
    this.selectedCard = tarotCards[3];
    this.selectedExplanation = this.selectedCard.explanation[0];
  }

  attached() {
    refreshJumpable();
  }

  // View
  selectCard(tarotCard) {
    this.selectedCard = tarotCard;
    console.log('TCL: SbTarot -> selectCard -> tarotCard', tarotCard);
  }

  selectExplanation(tarotCardExplanation) {
    console.log('TCL: SbTarot -> selectExplanation -> tarotCardExplanation', tarotCardExplanation);
    this.selectedExplanation = tarotCardExplanation;
  }


  // API

  async addTarotCard(tarotCardName) {
    const newTarotCard = await apiAddTarotCard({
      name: tarotCardName,
    });
    this.tarotCards.push(newTarotCard);
  }

  async addTarotExplanation() {
    const result = await apiAddTarotCardExplanation('foo', this.selectedCard.id);
    console.log('TCL: SbTarot -> addTarotExplanation -> result', result);
  }

  async removeTodoItem(todoId) {
    await apiDeleteTodoItem(todoId);
    this.todoItems = this.todoItems.filter(item => item.id !== todoId);
  }

  async toggleTodoItemDone(todoId, checked) {
    await apiUpdateTodoItemDone(todoId, checked);
  }

  async updateTodoItem(todoItem) {
    await apiUpdateTodoItem(todoItem.id, {
      attribute: 'text',
      value: todoItem.text,
    });
  }

  updateTarotCardExplanationAfterShortcut(selectedExplanation, attribute) {
    this.previousScope = hotkeys.getScope();
    hotkeys.setScope(tarotShortcutScope);

    hotkeys(acceptEditedTarotShortcut, tarotShortcutScope, async() => {
      console.log('TCL: SbTarot -> updateTarotCardExplanationAfterShortcut -> this.selectedExplanation[attribute]', this.selectedExplanation[attribute]);
      await apiUpdateTarotExplanation(this.selectedExplanation.id, {
        attribute,
        value: this.selectedExplanation[attribute],
      });
      hotkeys.setScope(this.previousScope);
      // @ts-ignore
      document.activeElement.blur();
      hotkeys.unbind('ctrl+enter', tarotShortcutScope);
    });
  }

  removeUpdateCardExplanationShortcut() {
    hotkeys.unbind('ctrl+enter', tarotShortcutScope);
    hotkeys.setScope(this.previousScope);
  }
}
