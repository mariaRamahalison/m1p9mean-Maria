import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';
import { FRAISLIVRAISON } from 'src/app/common/constante';
import { commandeI } from 'src/app/dto/commandeI';
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
    private commandeService: CommandeService
  ) { }


  idRestau = "625035bc390e82c7941eae4b";
  commande = { restaurant: this.idRestau, plats: [], total: 0, fraisLivraison: FRAISLIVRAISON };
  filtre = { filtre: "", _id: this.idRestau };
  listPlat: any = [];

  ngOnInit(): void {
    this.getData();
    this.initlocal();
  }

  initlocal() {
    this.storageService.setlocalStorage("COMMANDE", this.commande);

  }

  commander(item: any) {
    let objCommande = (this.storageService.getLocalStorage("COMMANDE"));
    if ((objCommande.plats.filter(element => element.plat._id === item._id)).length == 0) {
      objCommande.plats.push({ plat: item, quantite: 1, montant: 0 });
      this.commandeService.saveLocalCommande(objCommande);
      this.alertModal?.open("Succès", "Plat ajouter avec succès");
    } else {
      this.alertModal?.open("Error", "Plat déja dans le panier");
    }
  }

  getData() {
    this.platService.filtre(this.filtre).subscribe(
      res => {
        this.listPlat = [];
        res.data.forEach((element: any) => {
          element.plats.forEach((element: any) => {
            this.listPlat.push(element);
          });
        });
        console.log(this.listPlat);
      },
      error => {

      }
    )
  }

}
