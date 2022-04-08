import { ConstantPool } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';
import { LOCALSTORAGE } from 'src/app/common/constante';
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
    private storageService: StorageService
  ) { }

  idRestau = "624f3634ceb1024ec16c7e8a";
  filtre = { filtre: "", _id: this.idRestau };
  listPlat: any = [];
  commande = { idRestau: this.idRestau, plats: [{ nom: "", composition: "", prixVente: 0, prixAchat: 0, status: "" }] };


  ngOnInit(): void {
    this.getData();
    this.initlocal();
    // localStorage.setItem("u",this.commande);
  }

  initlocal() {
    
    let objCommande = (this.storageService.getLocalStorage("COMMANDE"));
    if (objCommande.idRestau != this.idRestau && objCommande.plats.length > 0) {
      // "pop up ";
    }
  }

  commander(item: any) {
    let objCommande =(this.storageService.getLocalStorage("COMMANDE"));
    if ((objCommande.plats.filter(element => element._id === item._id)).length == 0) {
      objCommande.plats.push(item);
      this.storageService.setlocalStorage("COMMANDE",objCommande);
      this.alertModal?.open("Succès","Plat ajouter avec succès");
    }else{
      this.alertModal?.open("Error","Plat déja dans le panier");
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
