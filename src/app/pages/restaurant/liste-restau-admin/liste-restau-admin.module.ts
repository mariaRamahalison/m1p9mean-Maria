import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommunModule } from 'src/app/common/commun/commun.module';
// import { RestauCommunModule } from '../restau-commun/restau-commun.module';


@NgModule({
  declarations: [ListeRestauAdminModule],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommunModule
  ]
})
export class ListeRestauAdminModule { }
