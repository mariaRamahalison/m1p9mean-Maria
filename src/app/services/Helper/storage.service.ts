import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  getLocalStorage(key ){
    var object = localStorage.getItem(key);
    if(object !=null && object != typeof undefined) return JSON.parse(object);
    return null;
  }
  
  setlocalStorage(key , value){
    localStorage.setItem(key, JSON.stringify(value));
  }

  getSessionStorage(key){
    var object = localStorage.getItem(key);
    if(object) return JSON.parse(object);
    return null;
  }
  
  setSessionStorage( key , value){
    sessionStorage.setItem(key, JSON.stringify(value));
  }

}
