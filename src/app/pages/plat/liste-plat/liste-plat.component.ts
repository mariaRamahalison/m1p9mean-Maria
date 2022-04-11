import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';
import { CommandeService } from 'src/app/services/commande.service';
import { StorageService } from 'src/app/services/Helper/storage.service';
import { PlatService } from 'src/app/services/plat.service';
declare var $: any;

@Component({
  selector: 'app-liste-plat',
  templateUrl: './liste-plat.component.html',
  styleUrls: ['./liste-plat.component.scss']
})
export class ListePlatComponent implements OnInit {

  @ViewChild(AlertModalComponent) alertModal: AlertModalComponent | undefined;
  constructor(
    private platService: PlatService,
    private storageService: StorageService,
    private commandeService: CommandeService,
    private routeA: ActivatedRoute
  ) { }

  load=true;
  restauDetail={ idRestau: "", nom: ""};
  commande;
  filtre = { filtre: "", _id: ""};
  listPlat: any = [];
  user;


  ngOnInit(): void {
    this.initlocal();
    this.getData();
    this.initCommande();
    
  }

  filtrer(){
    this.getData();
  }

  initlocal() {
    this.restauDetail.idRestau=this.routeA.snapshot.queryParamMap.get('idRestau') || "";
    this.restauDetail.nom=this.routeA.snapshot.queryParamMap.get('nom') || "";
    this.filtre._id=this.restauDetail.idRestau;
  }

  initCommande(){
    this.commande = {
      restaurant: { idRestau: this.restauDetail.idRestau, nom: this.restauDetail.nom },
      total: 0,
      plats: [],
      client: (this.storageService.getSessionStorage("USER_DETAIL")).user
    };
    this.storageService.setlocalStorage("COMMANDE", this.commande);
  }


  commander(item: any) {
    this.commande = (this.storageService.getLocalStorage("COMMANDE"));
    if ((this.commande.plats.filter(element => element.plat._id === item._id)).length == 0) {
      this.commande.plats.push({ plat: item, quantite: 1, montant: 0 });
      this.commandeService.saveLocalCommande(this.commande);
      this.alertModal?.open("Succès", "Plat ajouter avec succès");
    } else {
      this.alertModal?.open("Error", "Plat déja dans le panier");
    }
  }

  getData() {
    this.platService.filtre(this.filtre).subscribe(
      res => {
        this.load=false;
        this.listPlat = [];
        res.data.forEach((element: any) => {
            this.listPlat.push(element);
        });
      },
      error => {
        this.load=false;
      }
    )
  }

}
