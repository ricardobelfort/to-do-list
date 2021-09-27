import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from ".//app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from "ngx-toastr";
import { TasksModule } from "./tasks/tasks.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-bottom-right",
      preventDuplicates: false,
      progressBar: true,
      progressAnimation: "decreasing",
      closeButton: true,
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TasksModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SharedModule],
})
export class AppModule {}
