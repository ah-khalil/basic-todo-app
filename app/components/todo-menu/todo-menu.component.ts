import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TodoMenuItemComponent } from '../todo-menu-item/todo-menu-item.component';
import { Todo } from '../../models/todo';
import { TodoList } from 'src/app/models/todo-list';
import { MenuItemBase } from 'src/app/models/MenuItemBase';
import { MenuItemFolder } from 'src/app/models/MenuItemFolder';
import { MenuItem } from 'src/app/models/MenuItem';

@Component({
  selector: 'app-todo-menu',
  templateUrl: './todo-menu.component.html',
  styleUrls: ['./todo-menu.component.css']
})
export class TodoMenuComponent implements OnInit {
  menuItems: MenuItemBase[];

  constructor() {
    let menuItemRootFolder1: MenuItemFolder = new MenuItemFolder("Test Folder 1");
    let menuItemRootFolder2: MenuItemFolder = new MenuItemFolder("Test Folder 2");
    let menuItemChildFolder1: MenuItemFolder = new MenuItemFolder("Test Subfolder 1");
    let menuItemChildFolder2: MenuItemFolder = new MenuItemFolder("Test Subfolder 2");
    let menuItemRootLeaf1: MenuItem = new MenuItem("Root Leaf 3");
    let menuItemRootLeaf2: MenuItem = new MenuItem("Root Leaf 4");
    let menuItemSubfolderLeaf1: MenuItem = new MenuItem("Subfolder Leaf 1");
    let menuItemSubfolderLeaf2: MenuItem = new MenuItem("Subfolder Leaf 2");

    menuItemRootFolder1.add_child(menuItemChildFolder1);
    menuItemRootFolder1.add_child(menuItemRootLeaf1);
    menuItemRootFolder2.add_child(menuItemChildFolder2);
    menuItemRootFolder2.add_child(menuItemRootLeaf2);
    menuItemChildFolder1.add_child(menuItemSubfolderLeaf1);
    menuItemChildFolder2.add_child(menuItemSubfolderLeaf2);

    this.menuItems = [
      menuItemRootFolder1,
      menuItemRootFolder2
    ];
  }

  ngOnInit(): void {
    //todo list loading would happen here
  }
}
