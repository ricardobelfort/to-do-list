import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaskResolveGuard } from "../guards/task-resolve.guard";
import { TaskFormComponent } from "./task-form/task-form.component";

const routes: Routes = [
  {
    path: "dashboard/new",
    component: TaskFormComponent,
    resolve: { task: TaskResolveGuard },
  },
  {
    path: "update/:id",
    component: TaskFormComponent,
    resolve: { task: TaskResolveGuard },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
