import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StorageService } from './Helper/storage.service';
const env_URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(
    protected http: HttpClient,
    private storageService : StorageService) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' 
    })
  };

  postData(url: string, dataObject: any): Observable<any> {
    return this.http.post(env_URL.concat(url), dataObject, this.httpOptions).pipe(retry(1));
  }

  getData(url: string): Observable<any> {
    return this.http.get<any>(env_URL.concat(url), this.httpOptions).pipe(retry(1));
  }

  putData(url: string, dataObject: any): Observable<any> {
    return this.http.put(env_URL.concat(url), dataObject, this.httpOptions).pipe(retry(1));
  }

}

