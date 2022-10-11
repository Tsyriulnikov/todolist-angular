import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomainTodo, FilterType} from "../../../models/todos.models";
import {TodosService} from "../../../services/todos.service";

@Component({
  selector: 'tl-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo!: DomainTodo
  @Output() removeTodoEvent = new EventEmitter<string>()
  @Output() editTodoEvent = new EventEmitter<{ todoId: string; title: string }>()
  isEditMode = false
  newTitle = ''
  constructor(private todosService:TodosService) {
  }

  ngOnInit(): void {
  }

  removeTodoHandler() {
    this.removeTodoEvent.emit(this.todo.id)
  }
  editTitleHandler() {
    this.isEditMode = false
    this.editTodoEvent.emit({ todoId: this.todo.id, title: this.newTitle })
  }
  activateEditModeHandler() {
    this.newTitle = this.todo.title
    this.isEditMode = true
  }

  changeFilter(filter: FilterType) {
    this.todosService.changeFilter({ filter, todoId: this.todo.id })
  }
}
