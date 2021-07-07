import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private readonly BASE_URL = `${environment.BASE_URL}`;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.BASE_URL}`).pipe(take(1));
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.BASE_URL}/${id}`).pipe(take(1));
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.BASE_URL}`, task).pipe(take(1));
  }

  updateTask(task: Task) {
    return this.http.put(`${this.BASE_URL}/${task.id}`, task).pipe(take(1));
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.BASE_URL}/${id}`).pipe(take(1));
  }
}
