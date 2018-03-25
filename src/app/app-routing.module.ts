import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

const appRoutes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    component: Form1Component
  },
  {
    pathMatch: 'full',
    path: 'form2',
    component: Form2Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }