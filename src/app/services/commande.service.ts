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


  onChange(commande : any) {
    this.total(commande );
    this.saveLocalCommande(commande );
  }

  total(commande : any) {
    return commande.total = commande.plats
      .map((x : any) => x.montant)
      .reduce((acc, cur) => acc + cur, 0);
  }

  saveLocalCommande(commande : any) {
    this.storageService.setlocalStorage("COMMANDE", commande);
  }

  create(data: any) {
    const res = this.dataServ.postData(APICOM.create,data);
    return res;
  }

  filtrer(data: any){
    const res = this.dataServ.postData(APICOM.filtre,data);
    return res;
  }

  findNow(){
    const res = this.dataServ.getData(APICOM.findNow);
    return res;
  }

  update(data){
    const res = this.dataServ.putData(APICOM.update,data);
    return res;
  }

  trier(data){
    const res = this.dataServ.postData(APICOM.trier,data);
    return res;
  }

}
