import { Component, OnInit } from '@angular/core';
import { FRAISLIVRAISON } from 'src/app/common/constante';
import { commandeI } from 'src/app/dto/commandeI';
import { CommandeService } from 'src/app/services/commande.service';
import { StorageService } from 'src/app/services/Helper/storage.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  commande !: commandeI;
  total = 0;

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
    this.commande.fraisLivraison = this.commande.fraisLivraison | FRAISLIVRAISON;
    this.commande.plats= this.commande.plats
    .map(x => { 
      x.montant = x.quantite * x.prixVente; 
      return x; 
    });
    this.commandeService.onChange(this.commande);
    this.getTotal();
  }

  onQuantite(item) {
    item.montant = item.quantite * item.prixVente;
    this.commandeService.onChange(this.commande);
    this.getTotal();
  }

  annulerCommande(item) {
    let index = this.commande.plats.findIndex(x => x?._id === item?._id);
    if (index != -1) this.commande.plats.splice(index, 1);
    this.commandeService.onChange(this.commande);
    this.getTotal();
  }

}
