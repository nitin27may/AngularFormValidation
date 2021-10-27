import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";


import { Form1Component } from "./form1.component";
import { SharedModule } from "@shared/shared.module";


const form1Routes: Routes = [
  {
    path: "",
    component: Form1Component
  }];

@NgModule({
  declarations: [
    Form1Component
  ],
  imports: [
    SharedModule.forRoot(),
    RouterModule.forChild(form1Routes)
  ],
  providers: [],

})
export class Form1Module {
  constructor() {

  }
}
