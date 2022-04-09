import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommunModule } from 'src/app/common/commun/commun.module';
import { FormulaireInscriptionComponent } from '../formulaire-inscription/formulaire-inscription.component';




@NgModule({
  declarations: [FormulaireInscriptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommunModule
    
  ],
  exports:[FormulaireInscriptionComponent]
})
export class CommunFormModule { }
