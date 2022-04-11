import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  @ViewChild(AlertModalComponent) alertModal: AlertModalComponent | undefined;
  inscriptionForm: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    mdp: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });


  constructor(
    private userService: UserService,
    ) { }
  
  ngOnInit(): void {
  }


   verifyForm(key){
     let control=this.inscriptionForm.controls[key]
    return ((control.touched || control.dirty) && control?.errors?.['required'] && control?.invalid );
   }
  


  inscription() {
    console.log(this.inscriptionForm.value);
    if (this.inscriptionForm.valid) {
      let user=this.inscriptionForm.value;
      user.profil={nom:"CLIENT"};
      this.userService.inscription(user).subscribe(
        res=>{
          this.alertModal.open("Succès", "Inscription faite avec succès");
        },
        error=>{
          this.alertModal.open("Error", error.error.message);
        }
      )
    }else{
      this.alertModal.open("Error", "Veuillez verifier vos chhamp");
    }
  }

}
