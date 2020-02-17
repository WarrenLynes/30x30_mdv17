import { Component, OnInit } from '@angular/core';
import { TasksFacade } from '@mdv17/core-state';
import { Observable } from 'rxjs';
import { Task } from '@mdv17/core-data';

@Component({
  selector: 'mdv17-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]> = this.facade.allTasks$;
  task$: Observable<Task> = this.facade.selectedTask$;

  constructor(
    private facade: TasksFacade
  ) { }

  ngOnInit() {
    this.facade.load();
  }

  onSelectTask(taskId) {
    this.facade.select(taskId);
  }

  saveTask(task: Task) {
    if(task.id) {
      this.facade.update(task);
    } else {
      this.facade.create(task);
    }
    this.reset();
  }

  onDeleteTask(taskId: number) {
    this.facade.delete(taskId);
    this.reset();
  }
  reset() {
    this.facade.select(null);
  }

}
