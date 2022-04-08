import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { RestauCommunModule } from '../restau-commun/restau-commun.module';



@NgModule({
  declarations: [ListeRestauAdminModule],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule
  ]
})
export class ListeRestauAdminModule { }
