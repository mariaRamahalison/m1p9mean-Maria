import { Component, EventEmitter, OnInit, Input, Output, OnChanges } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  data = {titre:" ",text :""}

  constructor() { }

  ngOnInit(): void {
  }

  open(titre, text){
    console.log("niditra");
    this.data={titre : titre, text : text};
    console.log("eo");
    $("#alterModal").modal('show');
  }

}