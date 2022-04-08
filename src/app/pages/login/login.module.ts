import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeRestaurantComponent } from '../restaurant/liste-restaurant/liste-restaurant.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ListeRestaurantComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class LoginModule { }
