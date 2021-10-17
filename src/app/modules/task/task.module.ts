import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { TaskComponent } from './task.component';



@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class TaskModule { }
