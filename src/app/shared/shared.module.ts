import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
