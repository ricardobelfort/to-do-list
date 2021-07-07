import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { Task } from "../models/task.model";
import { ApiService } from "../shared/services/api.service";

@Injectable({
  providedIn: "root",
})
export class TaskResolveGuard implements Resolve<Task> {
  constructor(private api: ApiService) {}

  // Método para resolver os dados através da rota e já preencher o formulário caso seja uma atualização
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Task> {
    if (route.params && route.params["id"]) {
      return this.api.getTaskById(route.params["id"]);
    }

    return of({
      id: null,
      titulo: null,
      descricao: null,
    });
  }
}
