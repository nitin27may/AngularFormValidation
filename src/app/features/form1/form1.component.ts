import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ValidationService } from "../../core/components/validation-errors/validation-messages.service";
@Component({
  selector: "app-form1",
  templateUrl: "./form1.component.html",
  styleUrls: ["./form1.component.css"],
})
export class Form1Component implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService
  ) {
    this.userForm = this.createUserForm();
  }
 get
 userFormControl() {
    return this.userForm.controls;
  }
  createUserForm() {
    return this.formBuilder.group(
      {
        title: [
          null,
          {
            validators: [
              Validators.required
            ],

          },
        ],
        firstName: [
          null,
          {
            validators: [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(35),
            ],
            updateOn: "blur",
          },
        ],
        lastName: [
          null,
          {
            validators: [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(35),
            ],
            updateOn: "blur",
          },
        ],
        email: [
          null,
          {
            validators: [
              Validators.required,
              this.validationService.emailValidator,
            ],
            updateOn: "blur",
          },
        ],
        mobile: [
          null,
          {
            validators: [

              this.validationService.mobileValidator,
            ],
            updateOn: "blur",
          },
        ],
        password: [
          null,
          { validators: [Validators.required, this.validationService.passwordValidator],  updateOn: "blur", },
        ],
        confirmPassword: [
          null,
          { validators: [Validators.required], updateOn: "blur", },
        ],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validator: this.validationService.MustMatch(
          "password",
          "confirmPassword"
        ),

      }
    );
  }

  onReset() {
    this.userForm.reset();
  }
  ngOnInit() {

  }

  saveUser(userForm: any) {
    // Added check form valid, if any user inspecting html and enabling submit Button
    if (userForm.valid) {
      console.log(JSON.stringify(userForm.value, null, 4));
    }
  }
}
