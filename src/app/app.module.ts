import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Router } from "@angular/router";

import { BootstrapModule } from "./shared/bootstrap.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    BootstrapModule,
    SharedModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
  }
}
