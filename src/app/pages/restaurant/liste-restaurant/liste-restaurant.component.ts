import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-liste-restaurant',
  templateUrl: './liste-restaurant.component.html',
  styleUrls: ['./liste-restaurant.component.scss']
})
export class ListeRestaurantComponent implements OnInit {


  filtre = { filtre: "" };
  listRestau: any = [];
  constructor(
    private restauService: RestaurantService,
    private router: Router
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

  chooseRestau(item : any) {
    let restau= { idRestau: item._id, nom: item.nom };
    this.router.navigate(['/plats'], { queryParams: restau });
  }



}
