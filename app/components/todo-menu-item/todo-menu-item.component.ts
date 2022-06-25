import { Component, Input, OnInit } from '@angular/core';
import { TodoFolder } from 'src/app/models/todo-folder';

@Component({
  selector: 'app-todo-menu-item',
  templateUrl: './todo-menu-item.component.html',
  styleUrls: ['./todo-menu-item.component.css']
})
export class TodoMenuItemComponent implements OnInit {
  @Input() todo_folder?: TodoFolder;

  constructor() { }

  ngOnInit(): void {
  }
}
