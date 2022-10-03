import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreventionPageRoutingModule } from './prevention-routing.module';

import { PreventionPage } from './prevention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreventionPageRoutingModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [PreventionPage],
  
})
export class PreventionPageModule {}
