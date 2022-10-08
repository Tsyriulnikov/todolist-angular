import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../../../../models/task.models'

@Component({
  selector: 'tl-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task
  @Output() removeTaskEvent = new EventEmitter<{ taskId: string; todoId: string }>()

  removeTaskHandler() {
    this.removeTaskEvent.emit({todoId: this.task.todoListId, taskId: this.task.id})
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
