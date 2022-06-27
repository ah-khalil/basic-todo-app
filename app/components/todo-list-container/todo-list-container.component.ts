import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent implements OnInit {
  todoList: Array<Todo>;

  constructor() {
    this.todoList.push(
      new Todo("Todo Item 1", "This is a test todo item"),
      new Todo("Todo Item 2", "This is a test todo item"),
      new Todo("Todo Item 3", "This is a test todo item"),
      new Todo("Todo Item 4", "This is a test todo item"),
      new Todo("Todo Item 5", "This is a test todo item"),
      new Todo("Todo Item 6", "This is a test todo item"),
      new Todo("Todo Item 7", "This is a test todo item"),
      new Todo("Todo Item 8", "This is a test todo item"),
      new Todo("Todo Item 9", "This is a test todo item"),
    )
   }

  ngOnInit(): void {
  }

}
