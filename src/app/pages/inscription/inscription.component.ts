import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  newUser: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public inscriptionForm: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(1)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(1)]),
    mdp: new FormControl('', [Validators.required, Validators.minLength(4)]),
    adresse: new FormControl('', [Validators.required, Validators.minLength(4)]),
    numero: new FormControl('', [Validators.required, Validators.minLength(7)]),
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
  })

  inscription() {
    // console.log("inscription");
    // console.log(this.inscriptionForm.valid);
    // console.log(this.inscriptionForm.value);
    if (this.inscriptionForm.valid) {
      this.userService.inscription(this.inscriptionForm.value).subscribe(
        res=>{
          //notification de succès 
        },
        error=>{
          //notification d'erreur succès  ou message d'erreur 
        }
      )
    }
  }

}
