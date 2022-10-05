import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import {TodosRoutingModule} from "./todos-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {TodoComponent} from "./components/todos/todo/todo.component";
import {MatCardModule} from "@angular/material/card";




@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  exports: [
    TodosComponent
  ],
  imports: [
    CommonModule, TodosRoutingModule, MatInputModule, MatIconModule, FormsModule, MatCardModule
  ]
})
export class TodosModule { }
