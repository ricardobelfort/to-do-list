import { LoginComponent } from "./auth/login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskListComponent } from "./tasks/task-list/task-list.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
