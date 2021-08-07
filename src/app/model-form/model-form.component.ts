import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

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
  dropdownSelect!:FormControl;
  payment!:FormControl;
  address!:FormControl;
  city!:FormControl;
  postalCode!:FormControl;
  state!:FormControl;
  phone!:FormControl;
  country!:FormControl;
  requirement!:FormControl;
  fax!:FormControl;
  selectOptions !: string[];


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
    this.selectOptions = ['Mr.','Mrs.', 'Miss'];
    this.dropdownSelect = new FormControl(this.selectOptions[0].toString,Validators.required);
    this.payment = new FormControl("", Validators.required);
    this.address = new FormControl("", Validators.required);
    this.city = new FormControl("", Validators.required);
    this.postalCode = new FormControl("", [
      Validators.required,
      Validators.maxLength(6),
      Validators.minLength(6)
    ]);
    this.state = new FormControl("", Validators.required);
    this.phone = new FormControl("", [Validators.required, Validators.maxLength(14),
      Validators.minLength(10)]);
    this.country = new FormControl("", Validators.required);
    this.requirement = new FormControl("", Validators.required);
    this.fax = new FormControl("", Validators.required);
  }

  createForm(){
    this.myform = new FormGroup({
      
      dropdownSelect: this.dropdownSelect,
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      fax: this.fax,
      city: this.city,
      state: this.state,
      country: this.country,
      address: this.address,
      phone: this.phone,
      payment: this.payment,
      requirement: this.requirement,
      postalCode: this.postalCode,
    });
  }

  onRegister(){
    console.log(this.myform.value)
  }
}
