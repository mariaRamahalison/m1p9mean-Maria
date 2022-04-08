import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  getLocalStorage(key ){
    console.log(key);
    var object = localStorage.getItem(key);
    console.log(object);
    if(object) return JSON.parse(object);
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
