import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeRestaurantComponent } from '../restaurant/liste-restaurant/liste-restaurant.component';
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
export class LoginModule { }
