import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";


import { Form2Component } from "./form2.component";

import { CoreModule } from "../../core/core.module";
import { SharedModule } from "@shared/shared.module";

const form2Routes: Routes = [
  {
    path: "",
    component: Form2Component
  }];

@NgModule({
  declarations: [
    Form2Component
  ],
  imports: [
    SharedModule.forRoot(),
    CoreModule.forRoot(),
    RouterModule.forChild(form2Routes)
  ],
  providers: [],

})
export class Form2Module {
  constructor() {

  }
}
