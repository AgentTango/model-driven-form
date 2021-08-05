import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.scss']
})
export class ModelFormComponent implements OnInit {

  myform!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  email!: FormControl;
  password!: FormControl;


  ngOnInit(){
    this.createFormControls();
    this.createForm();
  }
  createFormControls(){
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }
  createForm(){
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
    });
  }
}
