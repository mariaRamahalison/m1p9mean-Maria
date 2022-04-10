import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeRestaurantComponent } from './liste-restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommunModule } from 'src/app/common/commun/commun.module';


@NgModule({
  declarations: [ListeRestaurantComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommunModule
  ]
})
export class ListeRestaurantModule { }
