import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { APIUSER } from '../common/constante';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private dataServ: DataService)
   {}

  inscription(data : any) {
    const res = this.dataServ.postData(APIUSER.inscription, data);
    return res;
  }

  login(data : any) {
    const res = this.dataServ.postData(APIUSER.login, data);
    return res;
  }

  update(data : any) {
    const res = this.dataServ.putData(APIUSER.update, data);
    return res;
  }
}
