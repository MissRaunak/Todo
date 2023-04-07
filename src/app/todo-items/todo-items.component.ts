import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent {
  constructor() { }

  ngOnInit(): void {
  }

  editable = false;
  @Input()
  todo!: Todo;
  @Output() remove = new EventEmitter<Todo>();
  saveItem(title: string) {
    if (!title) return;
    this.editable = false;
    this.todo.title = title;
  }
}
