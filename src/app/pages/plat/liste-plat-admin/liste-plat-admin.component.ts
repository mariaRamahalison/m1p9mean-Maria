import { Component, OnInit, ViewChild } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertModalComponent } from 'src/app/common/alert-modal/alert-modal.component';
import { StorageService } from 'src/app/services/Helper/storage.service';
declare var $: any;


@Component({
  selector: 'app-liste-plat-admin',
  templateUrl: './liste-plat-admin.component.html',
  styleUrls: ['./liste-plat-admin.component.scss']
})
export class ListePlatAdminComponent implements OnInit {

  @ViewChild(AlertModalComponent) alertModal: AlertModalComponent | undefined;
  constructor(
    private platService: PlatService,
    private storageService : StorageService) { }

  filtre = { filtre: "", _id: "" ,status:"VALIDE"};
  listPlat: any = [];
  platForm!: FormGroup;
  action = "CREER";
  user: any;

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

  initFiltre(){
    this.user=(this.storageService.getLocalStorage("USER_DETAIL")).user;
    this.filtre._id=this.user.profil.restaurant._id;
  }

  ngOnInit(): void {
    this.getData();
    this.initForm();
    this.initFiltre();
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
    this.platService.create({ idRestau: this.filtre._id, plat: this.platForm.value }).subscribe(
      res => {
        this.alertModal?.open("Succès", "Plat crée avec succès");
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


  getData() {
    this.platService.filtre(this.filtre).subscribe(
      res => {
        this.listPlat = [];
        res.data.forEach((element: any) => {
          // element.plats.forEach((element: any) => {
            this.listPlat.push(element);
          // });
        });
      },
      error => {

      }
    )
  }

  status(item,value) {
   item.status=value;
    this.platService.update(item).subscribe(
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

}
