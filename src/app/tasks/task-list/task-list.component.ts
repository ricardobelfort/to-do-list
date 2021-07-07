import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ApiService } from "src/app/shared/services/api.service";
import { Task } from "src/app/models/task.model";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.less"],
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  totalRecords: number = 0;

  constructor(
    private api: ApiService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.listAllTasks();
  }

  // Método de atualizar tarefa
  updateTask(id: number) {
    this.router.navigate(["update", id], { relativeTo: this.activedRoute });
  }

  // Método para listar todas as tarefas
  listAllTasks() {
    this.api.getTasks().subscribe(
      (res) => {
        this.tasks = res;
        this.totalRecords = res.length;
      },
      (err) => {
        this.toastr.error("Ops! Erro ao recuperar dados.", "Erro");
      }
    );
  }

  // Método para remover uma tarefa pelo ID
  removeTask(task: Task) {
    this.api.deleteTask(task.id).subscribe(
      (res) => {
        this.toastr.success("Tarefa removida com sucesso!", "Sucesso");
        this.listAllTasks();
      },
      (err) => {
        this.toastr.error("Ops! Alguma coisa deu errada.", "Erro");
      }
    );
  }
}
