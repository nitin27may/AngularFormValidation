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

Validation Component (ts):


Validation Service (custom validation rules):





[Live Example](https://stackblitz.com/github/nitin27may/FormValidation)
## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
