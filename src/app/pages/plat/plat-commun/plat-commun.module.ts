import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormulaireCategorieComponent } from '../formulaire-categorie/formulaire-categorie.component';
import { FormulairePlatComponent } from '../formulaire-plat/formulaire-plat.component';



@NgModule({
  declarations: [ FormulairePlatComponent],
  imports: [
    CommonModule
  ],
  exports: [ FormulairePlatComponent]
})
export class PlatCommunModule { }
