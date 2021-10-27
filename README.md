# Angular Form Validation

Form validation is crucial part of any project. We as developer spends most of the time arround it. This is my take on resusable componenet with reusable validation logics which we can use for any forms. If we will expose this an npm package then we can use it any project.

Idea is about to remove all boilerplate code in view and reuse validation logic.

## Use Case
If we have multiple error message to handle and show (html view):

### Traditional Approach Refer [Form 1](/src/app/features/from1/form1.component.html)
```html
 <form [formGroup]="userForm" (submit)="saveUser(userForm)">
          <br style="clear: both" />
          <h3 style="margin-bottom: 25px; text-align: center">Register</h3>
          <div class="form-row">
            <div class="form-group col">
              <label>Title</label>
              <select formControlName="title" name="title" class="form-control">
                <option value=""></option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </select>

            </div>
            <div class="form-group col-5">
              <label>First Name</label>
              <input type="text" formControlName="firstName" name="firstName" class="form-control" />
              <span class="text-danger"
                *ngIf="(userFormControl.firstName.touched) && userFormControl.firstName.errors?.required">
                This field is required
              </span>
              <span class="text-danger"
                *ngIf="(userFormControl.firstName.touched) && userFormControl.firstName.errors?.minlength">
                First Name should have minimum 2 characters
              </span>
              <span class="text-danger"
                *ngIf="(userFormControl.firstName.touched) && userFormControl.firstName.errors?.maxlength">
                First Name should have maximum 35 characters
              </span>
            </div>
            <div class="form-group col-5">
              <label>Last Name</label>
              <input type="text" formControlName="lastName" name="lastName" class="form-control" />
              <span class="text-danger"
                *ngIf="(userFormControl.lastName.touched) && userFormControl.lastName.errors?.required">
                This field is required
              </span>
              <span class="text-danger"
                *ngIf="(userFormControl.lastName.touched) && userFormControl.lastName.errors?.minlength">
                Last Name should have minimum 2 characters
              </span>
              <span class="text-danger"
                *ngIf="(userFormControl.lastName.touched) && userFormControl.lastName.errors?.maxlength">
                First Name should have maximum 35 characters
              </span>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label>Mobile</label>
              <input type="text" formControlName="mobile" name="mobile" class="form-control" />
              <span class="text-danger"
                *ngIf="(userFormControl.mobile.touched) && userFormControl.mobile.errors?.required">
                This field is required
              </span>
              <span class="text-danger"
                *ngIf="userFormControl.mobile.touched && userFormControl.mobile.errors?.invalidMobile">
                Mobile number format is invalid
              </span>
            </div>
            <div class="form-group col">
              <label>Email</label>
              <input type="text" formControlName="email" name="email" class="form-control" />
              <span class="text-danger"
                *ngIf="(userFormControl.email.touched) && userFormControl.email.errors?.required">
                This field is required
              </span>
              <span class="text-danger"
                *ngIf="userFormControl.email.touched && userFormControl.email.errors?.invalidEmailAddress">
                Email format is invalid
              </span>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label>Password</label>
              <input type="password" formControlName="password" class="form-control" />
              <span class="text-danger"
                *ngIf="(userFormControl.password.touched) && userFormControl.password.errors?.required">
                This field is required
              </span>
              <span class="text-danger"
                *ngIf="userFormControl.password.touched && userFormControl.password.errors?.invalidPassword">
                Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase
                letter and 1 number
              </span>
            </div>
            <div class="form-group col">
              <label>Confirm Password</label>
              <input type="password" formControlName="confirmPassword" class="form-control" />
              <span class="text-danger"
                *ngIf="(userFormControl.confirmPassword.touched)&& userFormControl.confirmPassword.errors?.required">
                This field is required
              </span>
              <span class="text-danger"
                *ngIf="userFormControl.confirmPassword.touched && userFormControl.confirmPassword.errors?.passwordMismatch">
                Passwords doesnot match
              </span>
            </div>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" formControlName="acceptTerms" id="acceptTerms" class="form-check-input" />
            <label for="acceptTerms" class="form-check-label">Accept Terms & Conditions</label>

            <span class="text-danger"
              *ngIf="(userFormControl.acceptTerms.touched)&& userFormControl.confirmPassword.errors?.required">
              This field is required
            </span>
          </div>
          <div class="text-center">
            <button class="btn btn-primary mr-1" [disabled]="userForm.invalid">Register</button>
            <button class="btn btn-secondary" type="reset" (click)="onReset()">Cancel</button>
          </div>
          <div>
            Form status: {{ userForm.status| json }}<br />
            Form value:
            <pre>{{ userForm.value| json }}</pre>



          </div>

        </form>
```

### Reusable componenet (Refer [Form 2](/src/app/features/from2/form2.component.html) and validation-errors module)
I got this solution from an article by '**Netanel Basal**'. I have added the validation logics and implmened it as part of [Validation Module](/src/app/core/components/validation-errors/validation-errors.module.ts).

If you will see Form2, there is not lables, span added to display error messages below the controls. 
```html
<div class="row justify-content-center">
  <div class="col-lg-4 col-md-4 col-sm-4">
    <div class="card m-3">
      <h5 class="card-header">Angular Reactive Form Validation</h5>
      <div class="card-body">
        <form [formGroup]="userForm" (submit)="saveUser(userForm)">
          <br style="clear: both" />
          <h3 style="margin-bottom: 25px; text-align: center">Register</h3>
          <div class="form-row">
            <div class="form-group col">
              <label>Title</label>
              <select formControlName="title" name="title" class="form-control">
                <option value=""></option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </select>

            </div>
            <div class="form-group col-5">
              <label>First Name</label>
              <input type="text" formControlName="firstName" name="firstName" class="form-control" />

            </div>
            <div class="form-group col-5">
              <label>Last Name</label>
              <input type="text" formControlName="lastName" name="lastName" class="form-control" />

            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label>Mobile</label>
              <input type="text" formControlName="mobile" name="mobile" class="form-control" />

            </div>
            <div class="form-group col">
              <label>Email</label>
              <input type="text" formControlName="email" name="email" class="form-control" />

            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label>Password</label>
              <input type="password" formControlName="password" class="form-control" />

            </div>
            <div class="form-group col">
              <label>Confirm Password</label>
              <input type="password" formControlName="confirmPassword" class="form-control" />

            </div>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" formControlName="acceptTerms" id="acceptTerms" class="form-check-input" />
            <label for="acceptTerms" class="form-check-label">Accept Terms & Conditions</label>

          </div>
          <div class="text-center">
            <button class="btn btn-primary mr-1" [disabled]="userForm.invalid">Register</button>
            <button class="btn btn-secondary" type="reset" (click)="onReset()">Cancel</button>
          </div>
          <div>
            Form status: {{ userForm.status | json }}<br />
            Form value:
            <pre>{{ userForm.value | json }}</pre>



          </div>

        </form>
      </div>
    </div>
  </div>
  

</div>

```

Below are some sample of validation logic in validation service, you can add your own method and retun error name if it has error.





```ts
import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
@Injectable({providedIn:'root'})
export class ValidationService {
    constructor() {

    }


    emailValidator(control: any) {
      // RFC 2822 compliant regex
      if (
        control.value && !control.value.match(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        )
      ) {
        return { invalidEmailAddress: true };

      } else {
        return null;
      }
    }

    mobileValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value && !control.value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)) {
            return { 'invalidMobile': true };
        } else {
          return null;
        }
    }
    passwordValidator(control: any) {
      // RFC 2822 compliant regex
      if (control.value && !control.value.match(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)) {
        return { 'invalidPassword': true };
      } else {

          return null;
      }
    }
    MustMatch(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
          const control = formGroup.get(controlName);
          const matchingControl = formGroup.get(matchingControlName);

          if (!(control.value && matchingControl.value)){
            // return if any of control does not have value
            return;
          }

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
              // return if another validator has already found an error on the matchingControl
              return;
          }

          // set error on matchingControl if validation fails
          if (control.value !== matchingControl.value) {
            formGroup.get(matchingControlName).setErrors({ passwordMustMatch: true });
            return  { 'passwordMustMatch': true };
          } else {
            return null;
          }
      }
    }
}


```


And add the error display message where you are injecting validation error module. In below example we are injecting ValidaionErrorsModule and then mapping error name and disply message. 
```ts
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
```

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
