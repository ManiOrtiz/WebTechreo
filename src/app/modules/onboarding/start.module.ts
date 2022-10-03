import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartPageRoutingModule } from './start-routing.module';

import { StartPage } from './start.page';
import { PasswordComponent } from './modals/password/password.component';
import { ContactComponent } from './modals/contact/contact.component';
import { GpsComponent } from './modals/gps/gps.component';
import { RegisterComponent } from './modals/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartPageRoutingModule
  ],
  declarations: [
    StartPage,
    PasswordComponent,
    ContactComponent,
    GpsComponent,
    RegisterComponent],
    providers:[
      PasswordComponent,
      ContactComponent,
      GpsComponent,
      RegisterComponent
    ]

})
export class StartPageModule {}
