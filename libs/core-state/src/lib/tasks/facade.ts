import { ActionsSubject, select, Store } from '@ngrx/store';
import { TasksPartialState } from './reducer';
import { Observable } from 'rxjs';
import { Task } from '@mdv17/core-data';
import { selectAllTasks, selectedTask } from './selectors';
import { createTask, deleteTask, loadTasks, taskSelected, updateTask } from './actions';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class TasksFacade {

  allTasks$: Observable<Task[]> = this.store.pipe(select(selectAllTasks));
  selectedTask$: Observable<Task> = this.store.pipe(select(selectedTask));

  constructor(
    private store: Store<TasksPartialState>,
    private actions$: ActionsSubject
  ) {}

  create(task: Task)      { this.store.dispatch(createTask({task})); }
  load()                  { this.store.dispatch(loadTasks()); }
  update(task: Task)      { this.store.dispatch(updateTask({task})); }
  delete(taskId: number)  { this.store.dispatch(deleteTask({taskId}))}
  select(taskId: any)     { this.store.dispatch(taskSelected({selectedTaskId: taskId}))}
}
