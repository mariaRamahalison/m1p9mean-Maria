import { Injectable } from '@angular/core';
import { APICOM } from '../common/constante';
import { DataService } from './data.service';
import { StorageService } from './Helper/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(
    private storageService: StorageService,
    private dataServ: DataService) { }


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

  create(data: any) {
    const res = this.dataServ.postData(APICOM.create,data);
    return res;
  }

  filtrer(data: any){
    const res = this.dataServ.postData(APICOM.create,data);
    return res;
  }

}
