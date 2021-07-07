import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TasksRoutingModule } from "./tasks-routing.module";
import { IconsModule } from "./../icons/icons.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaskFormComponent } from "./task-form/task-form.component";
import { TaskListComponent } from "./task-list/task-list.component";

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
  ],
  exports: [TaskFormComponent, TaskListComponent],
  declarations: [TaskFormComponent, TaskListComponent],
})
export class TasksModule {}
