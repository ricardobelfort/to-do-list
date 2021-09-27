import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: [""],
      password: [""],
    });
  }

  ngOnInit() {}

  login() {
    this.http.get<any>("http://localhost:3000/users").subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });

        if (user) {
          this.toastr.success("Login realizado com sucesso!", "Sucesso");
          this.loginForm.reset();
          this.router.navigate(["dashboard"]);
        } else {
          this.toastr.error("Usuário não encontrado.", "Erro");
        }
      },
      (err) => {
        this.toastr.error("Ops! Alguma coisa deu errado.", "Erro");
      }
    );
  }
}
