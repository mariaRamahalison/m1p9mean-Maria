import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandestatistiqueComponent } from './commandestatistique.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CommandestatistiqueComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class CommandestatistiqueModule { }
