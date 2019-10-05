//@ts-check

import { bindable } from 'aurelia-framework';
import {
  fetchListTarotCards,
  apiAddTarotCard,
  apiUpdateTarotExplanation,
  apiAddTarotCardExplanation,
  apiDeleteTarotCard,
} from './tarot.gateway';
import { refreshJumpable } from 'components/features/jumpable/jumpable.js';
import hotkeys from 'hotkeys-js';
import { acceptEditedTarotShortcut, tarotShortcutScope } from './tarot-shortcuts';


import './sb-tarot.less';

export class SbTarot {
  @bindable value = 'SbTarot';

  /** @type {gqlt.TarotCard} */
  selectedCard;

  /** @type {gqlt.TarotExplanation} */
  selectedExplanation;

  // newTarotCard;

  /** @type {gqlt.TarotCard[]} */
  tarotCards;

  async bind() {
    const tarotCards = await fetchListTarotCards();
    this.tarotCards = tarotCards.reverse();
    this.selectedCard = tarotCards[4];
    this.selectedExplanation = this.selectedCard.explanation[0];
  }

  attached() {
    refreshJumpable();
  }

  // View
  /**
   * @param {gqlt.TarotCard} tarotCard
   */
  selectCard(tarotCard) {
    this.selectedCard = tarotCard;
    this.selectedExplanation = this.selectedCard.explanation[0];
  }

  /**
   * @param {gqlt.TarotExplanation} tarotCardExplanation
   */
  selectExplanation(tarotCardExplanation) {
    this.selectedExplanation = tarotCardExplanation;
  }


  // API

  async addTarotCard() {
    // if (!tarotCardName) return console.error('No empty input.');

    // const newCard = {
    //   name: ''
    // };
    // this.newTarotCard = newCard;
    // this.selectedCard = newCard;
    // this.tarotCards = [newCard, ...this.tarotCards];
  }

  async addTarotExplanation() {
    const newExplanation = await apiAddTarotCardExplanation('Book', this.selectedCard.id);
    this.selectedCard.explanation.push(newExplanation);
  }

  async removeTarotCard(todoId) {
    await apiDeleteTarotCard(todoId);
    this.tarotCards = this.tarotCards.filter(item => item.id !== todoId);
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

  updateTarotCardExplanation = async(explanationSourceValue) => {
    return await apiUpdateTarotExplanation(this.selectedExplanation.id, {
      attribute: 'source',
      value: explanationSourceValue,
    });
  }

  /**
   * @param {gqlt.TarotExplanation} selectedExplanation
   * @param {gqlt.TarotExplanation["content"] | gqlt.TarotExplanation["source"]} attribute
   */
  updateTarotCardExplanationAfterShortcut(selectedExplanation, attribute) {
    this.previousScope = hotkeys.getScope();
    hotkeys.setScope(tarotShortcutScope);

    hotkeys(acceptEditedTarotShortcut, tarotShortcutScope, async() => {
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
