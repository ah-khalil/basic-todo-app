import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { TodoMenuComponent } from './components/todo-menu/todo-menu.component';
import { TodoMenuItemComponent } from './components/todo-menu-item/todo-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBannerComponent,
    TodoMenuComponent,
    TodoMenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
