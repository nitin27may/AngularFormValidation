# Angular Form Validation

Form validation is crucial part of any project. We as developer spends most of the time arround it. This is my take on resusable componenet with reusable validation logics which we can use for any forms. If we will expose this an npm package then we can use it any project.

Idea is about to remove all boilerplate code in view and reuse validation logic.

## Use Case
If we have multiple error message to handle and show (html view):

### Traditional Approach
```html
<div class="form-group">
  <input #Name class="form-control" type="text" formControlName="Name" placeholder="Name" />
    <div class="alert-danger" *ngIf="
              userForm.get('Name').hasError('required') &&
              userForm.get('Name').touched">
      Required
    </div>
    <div class="alert-danger" *ngIf="
              userForm.get('Name').hasError('minlength') &&
              userForm.get('Name').touched">
      Minimum of 2 characters
    </div>
    <div class="alert-danger" *ngIf="
              userForm.get('Name').hasError('maxlength') &&
              userForm.get('Name').touched">
       Max of 35 characters
    </div>
</div>
```

### Reusable componenet 

```html
<div class="form-group">
  <input #Name class="form-control" type="text" formControlName="Name" placeholder="Name" />
  <validation-messages [control]="userForm.controls.Name"></validation-messages>
</div>
```

Validation Component (view):
```html
<div class="alert-danger" *ngIf="errorMessage !== null">{{errorMessage}}</div>
```

Validation Component (ts):
```ts
import { Component, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ValidationService } from "./validation-messages.service";

@Component({
  selector: "validation-messages",
  templateUrl: "validation-messages.component.html",
  styleUrls: ["validation-messages.component.scss"],
})
export class ValidationMessagesComponent {
  @Input() control: FormControl;
  constructor(private validationService: ValidationService) {}

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return this.validationService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }

    return null;
  }
}

```

Validation Service (custom validation rules):

```ts
import { Injectable } from '@angular/core';
@Injectable()
export class ValidationService {
    constructor() {

    }

    getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config: any =  {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidMobile': 'Invalid Mobile no',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'maxlength': `Max length ${validatorValue.requiredLength}`
        };
        return config[validatorName];
    }

    emailValidator(control: any) {
      if (
        control.value.match(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        )
      ) {
        return null;
      } else {
        return { invalidEmailAddress: true };
      }
    }

    mobileValidator(control: any) {
        if (control.value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
            return null;
        } else {
            return { 'invalidMobile': true };
        }
    }
}

```





## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
