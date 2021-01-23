import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-form2",
  templateUrl: "./form2.component.html",
  styleUrls: ["./form2.component.css"],
})
export class Form2Component implements OnInit {
  userForm: FormGroup;
  myText: string;
  constructor(private formBuilder: FormBuilder) {}

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let mobileregex: RegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/
    this.userForm = this.formBuilder.group({
      Name: [
        "", { validators: [Validators.required,
          Validators.minLength(2),
          Validators.maxLength(35),], updateOn: "blur" }

      ],
      Email: [null, { validators: [Validators.required, Validators.pattern(emailregex)], updateOn: "blur"}],
      Mobile: [ null, { validators: [Validators.required, Validators.pattern(mobileregex)], updateOn: "blur"}],
    });
  }

  reset() {
    this.createForm();
  }
  ngOnInit() {
    this.createForm();
  }

  saveUser(userForm: any) {
    // Added check form valid, if any user inspecting html and enabling submit Button
    if (userForm.valid) {
      console.log(userForm.value);
    }
  }
}
