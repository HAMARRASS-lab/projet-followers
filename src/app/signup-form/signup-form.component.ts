import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UsernameValidator} from './username.validator'
import { PasswordValidator } from './password.validator';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(form: any) {
    // Your form submission logic goes here
    console.log(form.value); // Access the form values
  }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      UsernameValidator.cannotContainSpace
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      PasswordValidator.cantContainSpace
    ])
  })

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
}
