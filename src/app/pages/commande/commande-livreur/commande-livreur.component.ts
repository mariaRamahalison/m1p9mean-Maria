import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { CommandeService } from 'src/app/services/commande.service';
import { StorageService } from 'src/app/services/Helper/storage.service';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';
declare var $: any;

@Component({
  selector: 'app-commande-livreur',
  templateUrl: './commande-livreur.component.html',
  styleUrls: ['./commande-livreur.component.scss']
})
export class CommandeLivreurComponent implements OnInit {
  load=true;
  @ViewChild(AlertModalComponent) alertModal: AlertModalComponent | undefined;
  listAll: any = [];
  items = [
    { designation: "Commandé", nom: "COMMANDER", id: 1, data: [{}] },
    { designation: "En cours", nom: "En COURS", id: 2, data: [{}] },
    { designation: "Terminé", nom:"TERMINE", id: 3, data: [{}] }
  ];
  detailPlat:any=[];
  user: any;

 

  constructor(
    private commandeService: CommandeService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getData();
    this.getUser();
  }


  handleClick(event: MouseEvent,plats){
    this.detailPlat=plats;
    $("#scrollableModal").modal('show');
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (parseInt(event.container.id) == 2 && parseInt(event.previousContainer.id) == 1) this.prendreEnCharge(event);
      if (parseInt(event.container.id) == 3 && parseInt(event.previousContainer.id) == 2) this.terminer(event);
      this.alertModal?.open("Error", "Vous n'avez pas le droit de faire cette action");
    }
  }


  getUser() {
    this.user = (this.storageService.getLocalStorage("USER_DETAIL")).user;
  }

  prendreEnCharge(event) {
    let item = event.previousContainer.data[event.previousIndex];
    item.livreur = this.user;
    item.status = "EN COURS";
    item.dateCreate = new Date().toString();
    this.commandeService.update(item).subscribe(
      res => {
        this.deplace(event);
        this.items[1].data[this.items[1].data.length - 1] = res.data;
        this.alertModal?.open("Succès", "commande prise en charge avec succès");
      },
      error => {
        this.alertModal?.open("Error", error.error.message);
      });
  }

  terminer(event) {
    let item = event.previousContainer.data[event.previousIndex];
    if (item.livreur._id === this.user._id) {
      item.status = "TERMINE";
      item.dateCreate = new Date().toString()
      this.commandeService.update(item).subscribe(
        res => {
          this.deplace(event);
          this.alertModal?.open("Succès", "commande terminé avec succès");
        },
        error => {
          this.alertModal?.open("Error", error.error.message);
        }
      )
    } else {
      this.alertModal?.open("Error", "Vous n'avez pas le droit de déplacer cette commande ");
    }
  }

  deplace(event) {
    if (parseInt(event.container.id) > parseInt(event.previousContainer.id)) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  filtreStatus(key) {
    return this.listAll.filter(element => element.status === key);
  }

  trier() {
    this.items[0].data = this.filtreStatus("COMMANDE");
    this.items[1].data = this.filtreStatus("EN COURS");
    this.items[2].data = this.filtreStatus("TERMINE");
  }

  getData() {
    this.commandeService.findNow()
      .subscribe(
        res => {
          this.load=false;
          this.listAll = [];
          res.data.forEach(element => {
            this.listAll.push(element);
          });
          this.trier();
        },
        error => { this.load=false; });
  }

  verifyDispo(item) {
    return (item.livreur);
  }

  verifyIndex(index, data) {
    return index < data.length;
  }



}