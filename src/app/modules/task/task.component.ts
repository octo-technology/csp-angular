import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { TaskService } from './task.service';
import { Task } from './task'

@Component({
  selector: 'app-todo',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task$?: Observable<Task[]>;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.task$ = this.taskService.getTasks()
  }

}
