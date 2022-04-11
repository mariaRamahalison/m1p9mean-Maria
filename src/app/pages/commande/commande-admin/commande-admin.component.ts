import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { StorageService } from 'src/app/services/Helper/storage.service';
// import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande-admin',
  templateUrl: './commande-admin.component.html',
  styleUrls: ['./commande-admin.component.scss']
})
export class CommandeAdminComponent implements OnInit {


  filtre = { restau: "", status: ""};
  listCommande: any = [];
  user : any;
  constructor(
    private commandeService: CommandeService,
    private storageService : StorageService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  verifyCompte(){
    this.user=(this.storageService.getLocalStorage("USER_DETAIL")).user;
    if(this.user?.profil?.restaurant?._id){
      this.filtre.restau=this.user.profil.restaurant._id;
    }
  }

  filtrer(){
    this.getData();
  }

  verifyLivreur(commande){
    return (commande?.admin?.livreur?.nom);
  }

  getData() {
    this.verifyCompte();
    this.commandeService.filtrer(this.filtre)
      .subscribe(
        res => { 
          this.listCommande=[];
          res.data.forEach(element => {
            this.listCommande.push(element);
          });
        },
        error => { }
      )
  }

}
