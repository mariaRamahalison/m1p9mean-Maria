import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { environment } from '../../../environments/environment';
// import { LocalService } from '../../services/guard/local.service';
// import {  LOCALSTORAGE } from '../../commons/constant';
const env_URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(protected http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      // 'Authorization': 'Bearer ' + this.localService.getLocalValue(LOCALSTORAGE.TOKEN.token)
    })
  };

  postData(url , dataObject): Observable<any> {
    return this.http.post(env_URL.concat(url), dataObject, this.httpOptions).pipe(retry(1));
  }

  getData(url ): Observable<any> {
    return this.http.get<any>(env_URL.concat(url), this.httpOptions).pipe(retry(1));
  }

  putData(url , dataObject): Observable<any> {
    return this.http.put(env_URL.concat(url), dataObject, this.httpOptions).pipe(retry(1));
  }
  
  // getImageFromUrl(url ): Observable<Blob> {
  //   return this.http.get(url, {headers: new HttpHeaders({'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo5YjRiY2U5ZTgzYTEyMTk4YWViMzY1ZjVkNmQzMDA3Nw=='}), responseType: 'blob'}).pipe(retry(1));
  // }

  // postFile(url , data: FormData): Observable<any> {
    
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       // 'Authorization': 'Bearer ' + sessionStorage.getItem('token')
  //       // 'Authorization': 'Bearer ' + this.localService.getLocalValue(LOCALSTORAGE.TOKEN.token)
  //     })
  //   };
    
  //   return this.http.post(env_URL.concat(url), data, httpOptions).pipe(retry(1));
    
  // }
  
  // getFile(url, dataObject): Observable<any> {
  //   return this.http.post(env_URL.concat(url), dataObject, {
  //     headers: new HttpHeaders({
  //       // 'Authorization': 'Bearer ' + sessionStorage.getItem('token')
  //       'Authorization': 'Bearer ' + this.localService.getLocalValue(LOCALSTORAGE.TOKEN.token)
  //     }),
  //     responseType: 'blob'
  //   }).pipe(retry(1));
  // }

  // downloadFile(url) {
  //   return this.http.get<Blob>(url, {
  //     headers:new HttpHeaders({
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       // 'Authorization': 'Bearer ' + sessionStorage.getItem('token')
  //        'Authorization': 'Bearer ' + this.localService.getLocalValue(LOCALSTORAGE.TOKEN.token)
  //     }),
  //     observe: 'response', 
  //     responseType: 'blob' as 'json' });
  // }

}

