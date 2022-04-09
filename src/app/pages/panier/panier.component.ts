import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';
import { FRAISLIVRAISON } from 'src/app/common/constante';
import { commandeI } from 'src/app/dto/commandeI';
import { CommandeService } from 'src/app/services/commande.service';
import { StorageService } from 'src/app/services/Helper/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  @ViewChild(AlertModalComponent) alertModal: AlertModalComponent | undefined;
  commande;
  total = 0;

  comForm: FormGroup = new FormGroup({
    adresse: new FormControl('', [Validators.required]),
  })


  constructor(
    private storageService: StorageService,
    private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.getData();
  }

  getTotal() {
    this.total = this.commande.total - this.commande.fraisLivraison;
  }

  getData() {
    this.commande = this.storageService.getLocalStorage("COMMANDE");
    if (this.commande) {
      this.commande.fraisLivraison = this.commande.fraisLivraison | FRAISLIVRAISON;
      this.commande.plats = this.commande.plats
        .map(x => {
          x.montant = x.quantite * x.plat.prixVente;
          return x;
        });
      this.commandeService.onChange(this.commande);
      this.getTotal();
    }
  }

  onQuantite(item) {
    item.montant = item.quantite * item.plat.prixVente;
    this.commandeService.onChange(this.commande);
    this.getTotal();
  }

  annulerCommande(item) {
    let index = this.commande.plats.findIndex(x => x?.plat._id === item?.plat._id);
    if (index != -1) this.commande.plats.splice(index, 1);
    this.commandeService.onChange(this.commande);
    this.getTotal();
  }

  commander() {
    if (this.comForm.valid) {

      this.commande.adresse = (this.comForm.value).adresse;
      this.commandeService.create(this.commande)
        .subscribe(
          res => {
            //pop up commande effectué avec succès 
            this.alertModal?.open("Succès", "Commande effectué avec succès");
            this.storageService.setlocalStorage("COMMANDE", null);
            this.getData();
          },
          error => {
            this.alertModal?.open("Error", "Error");
          }
        )
    } else { this.alertModal?.open("Error", "Veuiller entrer une adresse"); }
  }

}
