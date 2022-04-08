import { Component, OnInit, ViewChild } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';
declare var $: any;


@Component({
  selector: 'app-liste-plat-admin',
  templateUrl: './liste-plat-admin.component.html',
  styleUrls: ['./liste-plat-admin.component.scss']
})
export class ListePlatAdminComponent implements OnInit {

  @ViewChild(AlertModalComponent) alertModal: AlertModalComponent | undefined;
  constructor(private platService: PlatService) { }

  idRestau = "624f3634ceb1024ec16c7e8a";
  filtre = { filtre: "", _id: this.idRestau };
  listPlat: any = [];
  platForm!: FormGroup;
  action = "CREER";

  setValue(item: any) {
    this.platForm = new FormGroup({
      nom: new FormControl(item.nom, [Validators.required]),
      composition: new FormControl(item.composition),
      prixVente: new FormControl(item.prixVente, [Validators.required]),
      prixAchat: new FormControl(item.prixAchat, [Validators.required]),
      _id: new FormControl(item._id),
    });
  }

  initForm() {
    this.platForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      composition: new FormControl(),
      prixVente: new FormControl("", [Validators.required]),
      prixAchat: new FormControl("", [Validators.required])
    })
  }


  ngOnInit(): void {
    this.getData();
    this.initForm();
  }

  createModal() {
    this.initForm();
    this.action = "CREER";
    $("#scrollableModal").modal('show');
  }

  updateModal(item: any) {
    this.setValue(item);
    this.action = "MODIFIER";
    $("#scrollableModal").modal('show');
  }

  update() {
    $("#scrollableModal").modal('hide');
    console
    this.platService.update(this.platForm.value).subscribe(
      res => {
        this.alertModal?.open("Succès", "Plat modifié avec succès");
        this.listPlat = [];
        res.data.plats.forEach((element: any) => {
          this.listPlat.push(element);
        });
      },
      error => {
        this.alertModal?.open("Error", error.error.message);
      }
    )
  }

  create() {
    $("#scrollableModal").modal('hide');
    this.platService.create({ idRestau: this.idRestau, plat: this.platForm.value }).subscribe(
      res => {
        this.alertModal?.open("Succès", "Plat crée avec succès");
        this.listPlat = [];
        console.log(res.data.plats);
        res.data.plats.forEach((element: any) => {
          this.listPlat.push(element);
        });
      },
      error => {
        this.alertModal?.open("Error", error.error.message);
      }
    )
  }


  getData() {
    this.platService.filtre(this.filtre).subscribe(
      res => {
        this.listPlat = [];
        res.data.forEach((element: any) => {
          element.plats.forEach((element: any) => {
            this.listPlat.push(element);
          });
        });
        console.log(this.listPlat);
      },
      error => {

      }
    )
  }

}
