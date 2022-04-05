import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireCategorieComponent } from '../formulaire-categorie/formulaire-categorie.component';
import { FormulairePlatComponent } from '../formulaire-plat/formulaire-plat.component';



@NgModule({
  declarations: [FormulaireCategorieComponent, FormulairePlatComponent],
  imports: [
    CommonModule
  ],
  exports: [FormulaireCategorieComponent, FormulairePlatComponent]
})
export class PlatCommunModule { }
