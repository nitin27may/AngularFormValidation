import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

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
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
