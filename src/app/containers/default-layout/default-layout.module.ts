import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { DefaultLayoutComponent } from './default-layout.component';
import { DefaultCommunModule } from '../default-commun/default-commun.module';


@NgModule({
  imports: [
    CommonModule,
    DefaultLayoutRoutingModule,
    DefaultCommunModule
  ],
  declarations: [DefaultLayoutComponent],
  exports: [DefaultLayoutComponent]
  
})
export class DefaultLayoutModule { }
