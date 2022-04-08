import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
// import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande-admin',
  templateUrl: './commande-admin.component.html',
  styleUrls: ['./commande-admin.component.scss']
})
export class CommandeAdminComponent implements OnInit {

  filtre = { restau: "", status: "", filtre: "" };
  listCommande: any = [];
  constructor(
    private commandeService: CommandeService
  ) { }

  ngOnInit(): void {
  }

  getData() {
    this.commandeService.filtrer(this.filtre)
      .subscribe(
        res => { 
          res.data.forEach(element => {
            this.listCommande.push(element);
          });
        },
        error => { }
      )
  }

}
