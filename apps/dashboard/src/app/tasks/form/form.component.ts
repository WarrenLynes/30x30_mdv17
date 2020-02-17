import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '@mdv17/core-data';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv17-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {

  form: FormGroup;


  @Input() selected: Task;
  @Output() saveTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<number>();
  @Output() cancel = new EventEmitter();

  constructor() {  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.selected) {
      this.buildForm();
    }
  }

  buildForm() {
    this.form = new FormGroup({
      name: new FormControl(this.selected.name),
      description: new FormControl(this.selected.description)
    })
  }

  onSubmit() {
    this.saveTask.emit({...this.selected, ...this.form.value});
    this.resetForm();
  }

  resetForm() {
    this.form.reset();
  }
}
