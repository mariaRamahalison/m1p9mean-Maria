import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';

declare var $: any;

@Component({
  selector: 'app-liste-restau-admin',
  templateUrl: './liste-restau-admin.component.html',
  styleUrls: ['./liste-restau-admin.component.scss']
})
export class ListeRestauAdminComponent implements OnInit {

  filtre = { filtre: "" };
  inscriptionForm="RESTAURANT";
  action="CREER";
  listRestau: any = [];
  restauForm!: FormGroup  ;
  @ViewChild(AlertModalComponent) alertModal: AlertModalComponent | undefined;
  
  constructor(private restauService: RestaurantService) { }

  setValue(item : any){
    this.restauForm = new FormGroup({
      nom: new FormControl(item.nom, [Validators.required]),
      tags: new FormControl(item.tags),
      adresse: new FormControl(item.adresse, [Validators.required]),
      _id: new FormControl(item._id),
    });
  }

  initForm(){
    this.restauForm= new FormGroup({
      nom: new FormControl("",[Validators.required]),
      tags: new FormControl(),
      adresse: new FormControl()
    })
  }
 

  ngOnInit(): void {
    this.getData();
    this.initForm();
  }

  inscriptionModal(){
    $("#inscriptionModal").modal('show');
  }
  createModal() {
    this.initForm();
    this.action="CREER";
    $("#scrollableModal").modal('show');
  }

  updateModal(item: any) {
    this.setValue(item);
    this.action="MODIFIER";
    $("#scrollableModal").modal('show');
  }

  update() {
    $("#scrollableModal").modal('hide');
    this.restauService.update(this.restauForm.value).subscribe(
      res => {
        let index = this.listRestau.findIndex((x:any) => x._id === res.data._id);
        this.listRestau[index]=res.data;
        this.alertModal?.open("Succès","Restaurant modifier avec succès");
      },
      error => {
        this.alertModal?.open("Error",error.error.message);
    
      }
    )
  }

  create() {
    $("#scrollableModal").modal('hide');
    this.restauService.create(this.restauForm.value).subscribe(
      res => {
        this.listRestau.push(res.data);
        this.alertModal?.open("Succès","Restaurant ajouter avec succès");
      },
      error => {
        this.alertModal?.open("Error",error.error.message);
      }
    )
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
}
