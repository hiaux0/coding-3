//@ts-check
import { bindable } from 'aurelia-framework';
import { refreshJumpable } from 'components/features/jumpable/jumpable.js';
import { fetchListTodoItems, apiAddTodo, apiDeleteTodoItem, apiUpdateTodoItemDone, apiUpdateTodoItem } from './todo.gateway.js';
import hotkeys from 'hotkeys-js';
import { acceptEditedTodoShortcut, todoShortcutScope } from './todo-shortcuts';

import './todo.less';


export class Todo {
  @bindable value = 'Todo';

  /** @type {HTMLInputElement} */
  todoInputRef;

  todoItems = [];

  async bind() {
    const todoItems = await fetchListTodoItems();
    this.todoItems = todoItems;
  }

  attached() {
    refreshJumpable();
  }

  async addTodo(value) {
    const newTodoItem = await apiAddTodo(value);
    this.todoItems.push(newTodoItem);
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

  updateTodoItemAfterShortcut(todoItem) {
    const previousScope = hotkeys.getScope();
    hotkeys.setScope(todoShortcutScope);

    hotkeys(acceptEditedTodoShortcut, todoShortcutScope, async() => {
      await apiUpdateTodoItem(todoItem.id, {
        attribute: 'text',
        value: todoItem.text,
      });
      hotkeys.setScope(previousScope);
      // @ts-ignore
      document.activeElement.blur();
      hotkeys.unbind('ctrl+enter', todoShortcutScope);
    });
  }

  removeUpdateTodoItemShortcut() {
    hotkeys.unbind('ctrl+enter', todoShortcutScope);
  }
}
