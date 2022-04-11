import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';
import { StorageService } from 'src/app/services/Helper/storage.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-liste-restaurant',
  templateUrl: './liste-restaurant.component.html',
  styleUrls: ['./liste-restaurant.component.scss']
})
export class ListeRestaurantComponent implements OnInit {

  @ViewChild(AlertModalComponent) alertModal: AlertModalComponent | undefined;
  filtre = { filtre: "" , status:"VALIDE" };
  listRestau: any = [];
  constructor(
    private restauService: RestaurantService,
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.restauService.filtre(this.filtre).subscribe(
      res => {
        this.listRestau = [];
        res.data.forEach((element: any) => {
          this.listRestau.push(element);
        });
      },
      error => {

      }
    )
  }

  filtrer(){
    this.getData();
  }
  
  chooseRestau(item : any) {
    let restau= { idRestau: item._id, nom: item.nom };
    this.router.navigate(['/app/plats'], { queryParams: restau });
  }

  



}
