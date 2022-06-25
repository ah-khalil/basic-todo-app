import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TodoMenuItemComponent } from '../todo-menu-item/todo-menu-item.component';
import { Todo } from '../../models/todo';
import { TodoList } from 'src/app/models/todo-list';
import { TodoFolder } from 'src/app/models/todo-folder';

@Component({
  selector: 'app-todo-menu',
  templateUrl: './todo-menu.component.html',
  styleUrls: ['./todo-menu.component.css']
})
export class TodoMenuComponent implements OnInit {
  todoFolders: TodoFolder[];

  constructor() {
    let menuItemRootFolder1: TodoFolder = new TodoFolder("Test Folder 1");
    let menuItemRootFolder2: TodoFolder = new TodoFolder("Test Folder 2");
    let menuItemChildFolder1: TodoFolder = new TodoFolder("Test Subfolder 1");
    let menuItemChildFolder2: TodoFolder = new TodoFolder("Test Subfolder 2");
    let menuItemRootLeaf1: TodoFolder = new TodoFolder("Root Leaf 3");
    let menuItemRootLeaf2: TodoFolder = new TodoFolder("Root Leaf 4");
    let menuItemSubfolderLeaf1: TodoFolder = new TodoFolder("Subfolder Leaf 1");
    let menuItemSubfolderLeaf2: TodoFolder = new TodoFolder("Subfolder Leaf 2");

    menuItemRootFolder1.add_child(menuItemChildFolder1);
    menuItemRootFolder1.add_child(menuItemRootLeaf1);
    menuItemRootFolder2.add_child(menuItemChildFolder2);
    menuItemRootFolder2.add_child(menuItemRootLeaf2);
    menuItemChildFolder1.add_child(menuItemSubfolderLeaf1);
    menuItemChildFolder2.add_child(menuItemSubfolderLeaf2);

    this.todoFolders = [
      menuItemRootFolder1,
      menuItemRootFolder2
    ];
  }

  ngOnInit(): void {
    //todo list loading would happen here
  }
}
