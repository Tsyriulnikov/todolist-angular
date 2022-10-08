import {Component, Input, OnInit} from '@angular/core';
import {combineLatest, map, Observable} from "rxjs";
import {TasksService} from "../../../../services/tasks.service";
import {TodosService} from "../../../../services/todos.service";
import {TaskStatusEnum} from "../../../../../core/enums/taskStatus.enum";
import {Task} from '../../../../models/task.models'

@Component({
  selector: 'tl-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() todoId!: string
  tasks$?: Observable<Task[]>

  taskTitle = ''

  constructor(private tasksService: TasksService, private todosService: TodosService) {
  }

  ngOnInit(): void {
    // subscribe
    this.tasks$ = combineLatest([this.tasksService.tasks$, this.todosService.todos$]).pipe(
      map(res => {
        const tasks = res[0]
        let tasksForTodo = tasks[this.todoId]
        const todos = res[1]

        const activeTodo = todos.find(tl => tl.id === this.todoId)

        if (activeTodo?.filter === 'completed') {
          tasksForTodo = tasksForTodo.filter(t => t.status === TaskStatusEnum.completed)
        }
        if (activeTodo?.filter === 'active') {
          tasksForTodo = tasksForTodo.filter(t => t.status === TaskStatusEnum.active)
        }
        return tasksForTodo
      })
    )

    this.tasksService.getTasks(this.todoId)
  }
  addTaskHandler() {
    this.tasksService.addTask({ title: this.taskTitle, todoId: this.todoId })
    this.taskTitle = ''
  }
}
