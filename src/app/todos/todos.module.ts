import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import {TodosRoutingModule} from "./todos-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {TodoComponent} from "./components/todos/todo/todo.component";
import {MatCardModule} from "@angular/material/card";
import {TaskComponent } from './components/todos/todo/tasks/task/task.component';
import {TasksComponent} from "./components/todos/todo/tasks/tasks.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";




@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TasksComponent,
    TaskComponent
  ],
  exports: [
    TodosComponent
  ],
  imports: [
    CommonModule, TodosRoutingModule, MatInputModule, MatIconModule, FormsModule, MatCardModule, ButtonModule, RippleModule
  ]
})
export class TodosModule { }
