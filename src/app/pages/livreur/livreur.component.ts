import { Component, OnInit } from '@angular/core';
import { LivreurService } from 'src/app/services/livreur.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

declare var $: any;


@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.scss']
})
export class LivreurComponent implements OnInit {

  actionButton="INSCRIPTION";
  listLivreur: any =[];
  userAction : any;
  result={message:"",type:"succes"};
  inscriptionForm: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    mdp: new FormControl(),
    adresse: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    restaurant: new FormControl()
  });

  constructor(
    private livreurService : LivreurService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getData();
  }

  modalInscription(){
    this.actionButton="INSCRIPTION";
    $("#scrollingLongContent").modal('show');
  }

  modalUpdate(livreur){
    this.userAction=livreur;
    this.initUser(livreur);
    this.actionButton="MODIFICATION";
    $("#scrollingLongContent").modal('show');
  }

  initUser(livreur){
    if(livreur){
        this. inscriptionForm = new FormGroup({
        nom: new FormControl(livreur.nom, [Validators.required]),
        prenom: new FormControl(livreur.prenom, [Validators.required]),
        mdp: new FormControl(livreur.mdp),
        adresse: new FormControl(livreur.adresse, [Validators.required]),
        numero: new FormControl(livreur.numero, [Validators.required]),
        email: new FormControl(livreur.email, [Validators.required, Validators.email]),
        restaurant: new FormControl()
      });
    }else{
        this.inscriptionForm= new FormGroup({
        nom: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        mdp: new FormControl(),
        adresse: new FormControl('', [Validators.required]),
        numero: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        restaurant: new FormControl()
      });
    }
  }

 
  getData(){
    this.livreurService.find().subscribe(
      res=>{
        this.listLivreur=[];
        res.data.forEach((element: any)=> {
          this.listLivreur.push(element);
        });
      },
      error=>{

      }
    )
  }

  verifyForm(key){
    let control=this.inscriptionForm.controls[key]
   return ((control.touched || control.dirty) && control?.errors?.['required'] && control?.invalid );
  }

  inscription() {
    // console.log(this.inscriptionForm.value);
    if (this.inscriptionForm.valid) {
      let user=this.inscriptionForm.value;
      user.profil={nom:"LIVREUR"};
      // console.log(user);
      this.userService.inscription(user).subscribe(
        res=>{
          this.result={message:"Inscription faite avec succès",type:"succes"};
          this.listLivreur.push(res);
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
      user._id=this.userAction._id;
      user.profil={nom:"LIVREUR"};
      this.userService.update(user).subscribe(
        res=>{
          this.result={message:"Modification faite avec succès",type:"succes"};
          let index = this.listLivreur.findIndex((x:any) => x._id === res.data._id);
          this.listLivreur[index]=res.data;
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
