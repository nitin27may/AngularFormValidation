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
    this.userForm = this.formBuilder.group({
      Name: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(35),
        ],
      ],
      Email: ["", [Validators.required]],
      Mobile: ["", [Validators.required]],
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
