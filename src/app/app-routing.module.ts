import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Form1Component } from "./features/form1/form1.component";
import { Form2Component } from "./features/form2/form2.component";

const appRoutes: Routes = [

  {
    path: "",
    loadChildren: () => import("./features/form1/form1.module").then((module) => module.Form1Module)
  },
  {
    path: "form2",
    loadChildren: () => import("./features/form2/form2.module").then((module) => module.Form2Module)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
    enableTracing: true,
    initialNavigation: "enabled",
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
