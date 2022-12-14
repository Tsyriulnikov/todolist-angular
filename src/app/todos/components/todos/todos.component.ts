import {Component, OnInit} from '@angular/core';
import {TodosService} from "../../services/todos.service";
import {Observable} from "rxjs";
import {DomainTodo} from "../../models/todos.models";

@Component({
  selector: 'tl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos$?: Observable<DomainTodo[]>
  todoTitle:string = ''

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todos$ = this.todosService.todos$
    this.todosService.getTodos()
  }

  addTodoHandler() {
    this.todosService.addTodo(this.todoTitle)
    this.todoTitle = ''
  }

  removeTodo(todoId: string) {
    this.todosService.removeTodo(todoId)
  }
  editTodo(data: { todoId: string; title: string }) {
    this.todosService.updateTodoTitle(data)
  }
}
