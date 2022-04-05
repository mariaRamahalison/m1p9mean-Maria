import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  log = { login : "" , mdp : ""}
  constructor() { }

  loginForm: FormGroup = new FormGroup({
    login : new FormControl('', [Validators.required ] ),
    mdp : new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
  }

  login(){
    this.log=this.loginForm.value;
    //insert 
  }

}
