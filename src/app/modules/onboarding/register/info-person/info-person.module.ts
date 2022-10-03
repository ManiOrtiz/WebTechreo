import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPersonPageRoutingModule } from './info-person-routing.module';

import { InfoPersonPage } from './info-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPersonPageRoutingModule
  ],
  declarations: [InfoPersonPage]
})
export class InfoPersonPageModule {}
