import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

//   var user = {'name':'John'};
// sessionStorage.setItem('user', JSON.stringify(user));
// var obj = JSON.parse(sessionStorage.user);
  // Set the json data to local storage
  setLocalValue(storage : any ,key: string, value: any) {
    storage.setItem(key , JSON.stringify(value));
  }
  // Get the json value from local storage
  getLocalValue(storage , key: string) {
    return JSON.parse(storage.)
  }
  // Clear the local storage
  clearLocal() {
    return this.storageService.secureStoragelocal.clear();
  }
  // remove
  removeLocalValue(key: string) {
    return this.storageService.secureStoragelocal.removeItem(key);
  }

  // Set the json data to local storage
  setSessionValue(key: string, value: any) {
      this.storageService.secureStorageSession.setItem(key, value);
  }
  // Get the json value from local storage
  getSessionValue(key: string) {
    return this.storageService.secureStorageSession.getItem(key);
  }
  // Clear the local storage
  clearSession() {
    return this.storageService.secureStorageSession.clear();
  }
  // remove
  removeSessionValue(key: string) {
    return this.storageService.secureStorageSession.removeItem(key);
  }
}
