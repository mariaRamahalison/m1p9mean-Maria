import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivreurComponent } from './livreur.component';
import { CommunFormModule } from 'src/app/common/commun-form/commun-form.module';
import { CommunModule } from 'src/app/common/commun/commun.module';



@NgModule({
  declarations: [
    LivreurComponent
  ],
  imports: [
    CommonModule,
    CommunFormModule,
    CommunModule
  ]
})
export class LivreurModule { }
