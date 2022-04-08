import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { APIRESTAU } from '../common/constante';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private dataServ: DataService) { }

  filtre(data: any) {
    const res = this.dataServ.postData(APIRESTAU.filtre,data);
    return res;
  }

  create(data: any) {
    const res = this.dataServ.postData(APIRESTAU.create,data);
    return res;
  }

  update(data: any) {
    const res = this.dataServ.putData(APIRESTAU.update,data);
    return res;
  }
}
