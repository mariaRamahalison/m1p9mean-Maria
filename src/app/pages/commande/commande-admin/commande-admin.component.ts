import { Component, OnInit } from '@angular/core';
// import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande-admin',
  templateUrl: './commande-admin.component.html',
  styleUrls: ['./commande-admin.component.scss']
})
export class CommandeAdminComponent implements OnInit {
  
  filtre= {restau:"", status: "", filtre: ""};
  constructor(
    // private commandeService= CommandeService
  ) { }

  ngOnInit(): void {
  }

  getData(){
    // this.commandeService.filtrer(filtre)
    // .subscribe(
    //   res=>{},
    //   error=>{}
    // )
  }

}
