//@ts-check
import { bindable } from 'aurelia-framework';
import { refreshJumpable } from 'components/features/jumpable/jumpable.js';
import { fetchListTodoItems, apiAddTodo } from './todo.gateway.js';
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

  removeTodoItem(todoId) {
    console.log('TCL: Todo -> removeTodoItem -> todoId', todoId);
  }
}
