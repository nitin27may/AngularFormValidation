import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NumberOnlyDirective } from "./directives/number-only.directive";
import { ValidaionErrorsModule } from "./components/validation-errors/validation-errors.module";
import { ValidationService } from "./components/validation-errors/validation-messages.service";



@NgModule({
  imports: [
    CommonModule,
    ValidaionErrorsModule.forRoot({
      errors: {
        useFactory() {
          return {
            required: 'This field is required',
            minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
            invalidEmailAddress: error => `Email Address is not valid`,
            invalidMobile: error => `Invalid Mobile number`,
            invalidPassword: error => `Password is weak`,
            passwordMustMatch: error => `Password is not matching`,
          };
        },
        deps: []
      }
      //controlErrorComponent: CustomControlErrorComponent, // Uncomment to see errors being rendered using a custom component
      //controlErrorComponentAnchorFn: controlErrorComponentAnchorFn // Uncomment to see errors being positioned differently
    })
  ],
  declarations: [NumberOnlyDirective],
  exports: [NumberOnlyDirective, ValidaionErrorsModule]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [ValidationService]
    };
  }
}
