import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { APILIVREUR } from '../common/constante';


@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  constructor(private dataServ: DataService) { }

  filtre(data: any) {
    const res = this.dataServ.postData(APILIVREUR.filtre,data);
    return res;
  }

  find() {
    const res = this.dataServ.getData(APILIVREUR.all);
    return res;
  }

  create(data: any) {
    const res = this.dataServ.postData(APILIVREUR.create,data);
    return res;
  }

}
