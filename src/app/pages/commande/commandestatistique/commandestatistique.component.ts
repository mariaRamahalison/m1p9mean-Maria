import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { StorageService } from 'src/app/services/Helper/storage.service';

@Component({
  selector: 'app-commandestatistique',
  templateUrl: './commandestatistique.component.html',
  styleUrls: ['./commandestatistique.component.scss']
})
export class CommandestatistiqueComponent implements OnInit {

  listBenefice:any=[];
  filtre={value:""};
  user:any;
  constructor(
    private commandeService: CommandeService,
    private storageService: StorageService)
   { }
 

  ngOnInit(): void {
    this.getUser();
    this.trier();
  }

  trier(){
    this.getData( this.filtre);
  }

  getDate(benefice){
    return benefice.day+"-"+benefice.month+"-"+benefice.year;
  }

  getUser(){
    this.user=(this.storageService.getLocalStorage("USER_DETAIL")).user;
  }

  isAdminEkaly(){
    return this.user.profil.nom==='ADMIN';
  }

  isFiltre(value){
    return (this.filtre.value===value || this.filtre.value==="");
  }

  getData( filtre ) {
    this.commandeService.trier(filtre)
      .subscribe(
        res => { 
          this.listBenefice=[];
          res.data.forEach(element => {
            this.listBenefice.push(element);
          });
        },
        error => { }
      )};

}
