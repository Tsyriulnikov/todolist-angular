import {Injectable} from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {DomainTask, GetTasksResponse,Task} from "../models/task.models";
import {CommonResponse} from "../../core/models/core.models";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks$ = new BehaviorSubject<DomainTask>({})

  constructor(private http: HttpClient) {
  }

  getTasks(todoId: string) {
    return this.http
      .get<GetTasksResponse>(`${environment.baseUrl}/todo-lists/${todoId}/tasks`)
      .pipe(map(t => t.items))
      .subscribe((tasks: Task[]) => {
        const stateTasks = this.tasks$.getValue()
        stateTasks[todoId] = tasks
        this.tasks$.next(stateTasks)
      })
  }
  addTask(data: { todoId: string; title: string }) {
    this.http
      .post<CommonResponse<{ item: Task }>>(
        `${environment.baseUrl}/todo-lists/${data.todoId}/tasks`,
        { title: data.title }
      )
      .pipe(
        map(res => {
          const stateTasks = this.tasks$.getValue()
          const newTask = res.data.item
          const newTasks = [newTask, ...stateTasks[data.todoId]]
          stateTasks[data.todoId] = newTasks
          return stateTasks
        })
      )
      .subscribe((tasks: DomainTask) => this.tasks$.next(tasks))
  }
}
