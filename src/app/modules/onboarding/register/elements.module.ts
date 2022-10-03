import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElementsPageRoutingModule } from './elements-routing.module';

import { ElementsPage } from './elements.page';
import { TechreoCardComponent } from './modals/techreo-card/techreo-card.component';
import { UpsComponent } from './modals/ups/ups.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementsPageRoutingModule
  ],
  declarations: [
    ElementsPage,
    TechreoCardComponent,
    UpsComponent
  ],
  providers:[
    TechreoCardComponent,
    UpsComponent
  ]
})
export class ElementsPageModule {}
