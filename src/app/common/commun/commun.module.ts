import { NgModule } from '@angular/core';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AlertModalComponent],
  imports: [
    CommonModule
  ],
  exports:[AlertModalComponent]
})

export class CommunModule { }
