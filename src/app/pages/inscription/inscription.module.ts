import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommunModule } from 'src/app/common/commun/commun.module';
import { CommunFormModule } from 'src/app/common/commun-form/commun-form.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommunModule,
    CommunFormModule
  ]
})
export class InscriptionModule { }
