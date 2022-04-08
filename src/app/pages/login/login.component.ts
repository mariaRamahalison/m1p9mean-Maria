import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { COMMANDE, LOCALSTORAGE } from 'src/app/common/constante';
import { StorageService } from 'src/app/services/Helper/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private storageService : StorageService,
    private route: Router) { }

  loginForm: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required ] ),
    mdp : new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe(
        res=>{
          LOCALSTORAGE.token=res.data.token,
          LOCALSTORAGE.user=res.data.user
          this.storageService.setlocalStorage("USER_DETAIL",LOCALSTORAGE);
          this.storageService.setlocalStorage("COMMANDE",COMMANDE);
          this.route.navigate(['/restaurants']);
        },
        error=>{
        });
    }
  }

}
