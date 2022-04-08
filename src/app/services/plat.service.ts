import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { APIPLAT } from '../common/constante';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private dataServ: DataService) { }

  filtre(data: any) {
    const res = this.dataServ.postData(APIPLAT.filtre,data);
    return res;
  }

  create(data: any) {
    const res = this.dataServ.postData(APIPLAT.create,data);
    return res;
  }

  update(data: any) {
    const res = this.dataServ.putData(APIPLAT.update,data);
    return res;
  }
}
