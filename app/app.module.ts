import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { TodoMenuComponent } from './components/todo-menu/todo-menu.component';
import { TodoMenuItemComponent } from './components/todo-menu-item/todo-menu-item.component';
import { TodoListContainerComponent } from './components/todo-list-container/todo-list-container.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoEditorContainerComponent } from './components/todo-editor-container/todo-editor-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBannerComponent,
    TodoMenuComponent,
    TodoMenuItemComponent,
    TodoListContainerComponent,
    TodoListItemComponent,
    TodoEditorContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
