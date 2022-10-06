import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomainTodo} from "../../../models/todos.models";

@Component({
  selector: 'tl-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
@Input() todo!:DomainTodo
@Output() removeTodoEvent = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  removeTodoHandler() {
    this.removeTodoEvent.emit(this.todo.id)
  }
}
