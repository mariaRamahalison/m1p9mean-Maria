import { Component, EventEmitter, OnInit, Input, Output, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.scss']
})
export class FormulaireInscriptionComponent implements OnInit {

  actionButton="INSCRIPTION";
  result={message:"",type:"succes"};
  @Input() action ="CLIENT";
  @Input() user : any;
  listRestau: any = [];
  defaultRestau : any;
  nom="";
  inscriptionForm: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    mdp: new FormControl(),
    adresse: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    restaurant: new FormControl()
  });

  ngOnChanges() {
    // console.log(this.user);
    this.initUser();
  }

  initUser(){
    if(this.user){
        this.actionButton="MODIFICATION";
        this. inscriptionForm = new FormGroup({
        nom: new FormControl(this.user.nom, [Validators.required]),
        prenom: new FormControl(this.user.prenom, [Validators.required]),
        mdp: new FormControl(this.user.mdp),
        adresse: new FormControl(this.user.adresse, [Validators.required]),
        numero: new FormControl(this.user.numero, [Validators.required]),
        email: new FormControl(this.user.email, [Validators.required, Validators.email]),
        restaurant: new FormControl()
      });
    }
  }

  constructor(
    private userService: UserService,
    private restauService: RestaurantService,
    private route: Router,
    private activedRoute: ActivatedRoute
    ) { }

  
  ngOnInit(): void {
    this.getDataRestau();
  }

  getDataRestau() {
    this.restauService.filtre( { filtre: "" }).subscribe(
      res => {
        this.listRestau = [];
        res.data.forEach((element: any) => {
          this.listRestau.push(element);
        });
        if(this.listRestau.length==0){
          this.result={message:"Pas de restaurant disponible",type:"erreur"};
          // this.alertModal?.open("Error","Pas de restaurant disponible");
        }else{
          this.defaultRestau=this.listRestau[0];
          // console.log(this.defaultRestau);
        }
       },
      error => {

      }
    )
  }

  asignProfil(user){
    if(this.action==="RESTAURANT"){
      user.profil={nom:"RESTAURANT", restaurant:user.restaurant}
    }
    if(this.action==="ADMIN"){
      user.profil={nom:"ADMIN"}
    }
    if(this.action==="LIVREUR"){
      user.profil={nom:"LIVREUR"}
    }
    if(this.action==="CLIENT"){
      user.profil={nom:"CLIENT"}
    }
    delete user.restaurant;
    return user;
  }
  
   initForm(){
     if(this.action==='CLIENT'){
      let mdp=this.inscriptionForm.get('mdp') as FormControl;
      mdp=new FormControl('', [Validators.required, Validators.minLength(1)]);
     }
     if(this.action==='RESTAURANT'){
      let restaurant=this.inscriptionForm.get('restaurant') as FormControl;
      restaurant=new FormControl('', [Validators.required]);
     }
   }

   verifyForm(key){
     let control=this.inscriptionForm.controls[key]
    return ((control.touched || control.dirty) && control?.errors?.['required'] && control?.invalid );
   }
  


  inscription() {
    // console.log(this.inscriptionForm.value);
    if (this.inscriptionForm.valid) {
      let user=this.inscriptionForm.value;
      user=this.asignProfil(user);
      this.userService.inscription(user).subscribe(
        res=>{
          this.result={message:"Inscription faite avec succès",type:"succes"};
        },
        error=>{
          this.result={message:error.error.message,type:"erreur"};
        }
      )
    }else{
      this.result={message:"Veuillez remplir les champs",type:"erreur"};
    }
  }

  update() {
    if (this.inscriptionForm.valid) {
      let user=this.inscriptionForm.value;
      user._id=this.user._id;
      user=this.asignProfil(user);
      this.userService.update(user).subscribe(
        res=>{
          this.result={message:"Modification faite avec succès",type:"succes"};
        },
        error=>{
          this.result={message:error.error.message,type:"erreur"};
        }
      )
    }else{
      this.result={message:"Veuillez remplier les champs",type:"erreur"};
    }
  }

}

