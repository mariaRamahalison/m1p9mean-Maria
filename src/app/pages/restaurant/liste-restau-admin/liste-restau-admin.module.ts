import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommunModule } from 'src/app/common/commun/commun.module';
import { ListeRestauAdminComponent } from './liste-restau-admin.component';
import { CommunFormModule } from 'src/app/common/commun-form/commun-form.module';


@NgModule({
  declarations: [ListeRestauAdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommunModule,
    CommunFormModule
  ],
  exports:[]
})
export class ListeRestauAdminModule { }
