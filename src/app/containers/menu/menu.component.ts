import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/Helper/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user : any;
  constructor(
    private storageService : StorageService
  ) { }

  ngOnInit(): void {
    this.user=(this.storageService.getLocalStorage("USER_DETAIL")).user;
  }

  isRole(value){
    return this.user.profil.nom===value;
  }
}
