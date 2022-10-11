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
import { TodoFiltersComponent } from './components/todos/todo/todo-filters/todo-filters.component';
import { TodoFooterComponent } from './components/todos/todo/todo-footer/todo-footer.component';
import {AppModule} from "../app.module";
import {MenuComponent} from "../shared/components/menu/menu.component";
import {MenubarModule} from "primeng/menubar";




@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TasksComponent,
    TaskComponent,
    TodoFiltersComponent,
    TodoFooterComponent,
    MenuComponent,

  ],
  exports: [
    // TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
  ]
})
export class TodosModule { }
