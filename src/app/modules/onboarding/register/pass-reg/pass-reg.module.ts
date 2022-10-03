import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassRegPageRoutingModule } from './pass-reg-routing.module';

import { PassRegPage } from './pass-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassRegPageRoutingModule
  ],
  declarations: [PassRegPage]
})
export class PassRegPageModule {}
