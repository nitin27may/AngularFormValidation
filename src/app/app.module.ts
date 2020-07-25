import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { Router } from "@angular/router";

import { BootstrapModule } from "./bootstrap.module";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { CountdownPipe } from "./core/pipe/countdown.pipe";
import { ValidationMessagesComponent } from "./core/components/validation-messages/validation-messages.component";
import { ValidationService } from "./core/components/validation-messages/validation-messages.service";
import { Form1Component } from "./form1/form1.component";
import { Form2Component } from "./form2/form2.component";

@NgModule({
  declarations: [
    AppComponent,
    ValidationMessagesComponent,
    CountdownPipe,
    Form1Component,
    Form2Component,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    BootstrapModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
  }
}
