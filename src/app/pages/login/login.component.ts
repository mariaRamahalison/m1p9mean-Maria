import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';
import { COMMANDE, LOCALSTORAGE } from 'src/app/common/constante';
import { StorageService } from 'src/app/services/Helper/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild(AlertModalComponent) alertModal: AlertModalComponent | undefined;
  loginForm: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required ] ),
    mdp : new FormControl('', [Validators.required]),
  });
  user:any;

  constructor(
    private userService: UserService,
    private storageService : StorageService,
    private route: Router) { }


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
          console.log(LOCALSTORAGE.token);
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
          this.alertModal.open("Error", error.error.message);
        });
    }else{
      this.alertModal.open("Error", "Veuillez remplir les champs ");
    }
  }

}
