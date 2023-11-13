import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ConatctMethods=[{id:1,name:'email'},{id:2,name:'phone'},{id:3,name:'sms'}];
  ngOnInit(): void {
  }


  log(x: any) {
    console.log(x)
  }

  submit(f: any) {
    console.log(f.value)
   
  }
}
