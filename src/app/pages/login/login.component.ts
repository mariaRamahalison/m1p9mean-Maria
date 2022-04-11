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
  });
  user:any;

  ngOnInit(): void {
  }

  isRole(value){
    return this.user.profil.nom===value;
  }

  login(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe(
        res=>{
          LOCALSTORAGE.token=res.data.token,
          LOCALSTORAGE.user=res.data.user;
          this.user=res.data.user;
          this.storageService.setlocalStorage("USER_DETAIL",LOCALSTORAGE);
          this.storageService.setlocalStorage("COMMANDE",COMMANDE);
          if(this.isRole('ADMIN')){
            this.route.navigate(['app/restaurant/admin']);
          }
          if(this.isRole('CLIENT')){
            this.route.navigate(['app/restaurants']);
          }
          if(this.isRole('LIVREUR')){
            this.route.navigate(['app/commande/livreur']);
          }
          if(this.isRole('RESTAURANT')){
            this.route.navigate(['app/plat/admin']);
          }
        },
        error=>{
        });
    }
  }

}
