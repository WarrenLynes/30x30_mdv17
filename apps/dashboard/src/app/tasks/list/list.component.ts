import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '@mdv17/core-data';

@Component({
  selector: 'mdv17-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() data: Task[];
  @Input() selected: Task;
  @Output() selectTask = new EventEmitter<any>();

}
