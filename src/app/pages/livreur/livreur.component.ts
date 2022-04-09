import { Component, OnInit } from '@angular/core';
import { LivreurService } from 'src/app/services/livreur.service';

declare var $: any;


@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.scss']
})
export class LivreurComponent implements OnInit {

 

  // filtre={filtre: ""};
  listLivreur: any =[];
  inscriptionForm="LIVREUR";
  userAction : any;
  constructor(private livreurService : LivreurService) { }

  ngOnInit(): void {
    this.getData();
  }

  updateLivreur(livreur){
    this.userAction=livreur;
    console.log(this.userAction);
    $("#scrollingLongContent").modal('show');
  }

  getData(){
    this.livreurService.find().subscribe(
      res=>{
        this.listLivreur=[];
        res.data.forEach((element: any)=> {
          this.listLivreur.push(element);
        });
      },
      error=>{

      }
    )
  }



}
