import { ToastrService } from "ngx-toastr";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Task } from "src/app/models/task.model";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.less"],
})
export class TaskFormComponent implements OnInit {
  formValue: FormGroup;
  tasks: Task[];
  task: Task;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Buscar uma cópia dos dados do formulário
    const task = this.activatedRoute.snapshot.data["task"];

    this.formValue = this.fb.group({
      id: [task.id],
      titulo: [task.titulo, Validators.required],
      descricao: [task.descricao, Validators.required],
    });
  }

  // Método para criar nova tarefa
  addTask() {
    if (this.formValue.valid) {
      if (this.formValue.value.id) {
        this.api.updateTask(this.formValue.value).subscribe(
          (res) => {
            this.toastr.success("Tarefa atualizada com sucesso!", "Sucesso");
            this.formValue.reset();
            this.router.navigate(["/"]);
            this.listAllTasks();
          },
          (err) => {
            this.toastr.error("Ops! Erro ao atualizar a tarefa.", "Erro");
          }
        );
      } else {
        this.api.createTask(this.formValue.value).subscribe(
          (res) => {
            this.toastr.success("Tarefa adicionada com sucesso!", "Sucesso");
            this.formValue.reset();
            this.router.navigate(["/"]);
            this.listAllTasks();
          },
          (err) => {
            this.toastr.error("Ops! Erro ao adicionar uma tarefa.", "Erro");
          }
        );
      }
    }
  }

  // Método para listar todas as tarefas
  listAllTasks() {
    this.api.getTasks().subscribe(
      (res) => {
        this.tasks = res;
      },
      (err) => {
        this.toastr.error("Ops! Erro ao recuperar dados.", "Erro");
      }
    );
  }

  // Método para cancelar e voltar a lista
  cancelTask() {
    this.formValue.reset();
    this.router.navigate(["/"]);
  }
}
