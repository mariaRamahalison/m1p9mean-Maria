import { Component, OnInit } from '@angular/core';
import {UtilisateurDto } from 'src/app/models/utilisateur.dto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  newUser: any;
  constructor() { }

  ngOnInit(): void {
  }

  public inscriptionForm: FormGroup = new FormGroup({
    nom : new FormControl('', [Validators.required , Validators.minLength(1)] ),
    mdp : new FormControl('', [Validators.required, Validators.minLength(4)]),
    adresse: new FormControl('', [Validators.required, Validators.minLength(4)]),
    numero: new FormControl('', [Validators.required, Validators.minLength(7)]),
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
  })

  inscription(){
    if(this.inscriptionForm.valid){
      this.newUser=this.inscriptionForm.value;
      this.newUser.dateCreate= moment().format('DD MM YYYY');
      this.newUser.dateUpdate= moment().format('DD MM YYYY');
      this.newUser.status="CREATED";
      this.newUser.profil.nom="CLIENT";
      //api insert client 
      // notification ok 
    }
  }

}
