import { Component, Input, OnInit } from '@angular/core';
import { MenuItemBase } from 'src/app/models/MenuItemBase';

@Component({
  selector: 'app-todo-menu-item',
  templateUrl: './todo-menu-item.component.html',
  styleUrls: ['./todo-menu-item.component.css']
})
export class TodoMenuItemComponent implements OnInit {
  @Input() menu_item_components?: MenuItemBase;

  constructor() { }

  ngOnInit(): void {
  }
}
