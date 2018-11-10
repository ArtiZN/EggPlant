import { LogInFormGroup } from './../../models/login/login.form-group';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LogInFormGroup;

  constructor() {
    this.form = new LogInFormGroup();
  }

  ngOnInit() {
  }

  login(form) {
    console.log(form);
  }
}
