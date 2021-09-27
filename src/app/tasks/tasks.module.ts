import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./../shared/shared.module";

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
    SharedModule,
  ],
  exports: [TaskFormComponent, TaskListComponent],
  declarations: [TaskFormComponent, TaskListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TasksModule {}
