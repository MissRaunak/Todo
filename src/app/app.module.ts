import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatModule } from './mat/mat.module';
@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoItemsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
