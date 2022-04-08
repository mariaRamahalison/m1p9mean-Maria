import { Injectable } from '@angular/core';
import { StorageService } from './Helper/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private storageService: StorageService) { }


  onChange(commande) {
    this.total(commande);
    this.saveLocalCommande(commande);
  }

  total(commande) {
    return commande.total = commande.plats
      .map(x => x.montant)
      .reduce((acc, cur) => acc + cur, 0);
  }

  saveLocalCommande(commande) {
    this.storageService.setlocalStorage("COMMANDE", commande);
  }

}
