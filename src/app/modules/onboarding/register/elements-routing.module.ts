import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementsPage } from './elements.page';

const routes: Routes = [
  {
    path: '',
    component: ElementsPage
  },
  {
    path: 'phone',
    loadChildren: () => import('./phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'pass-reg',
    loadChildren: () => import('./pass-reg/pass-reg.module').then( m => m.PassRegPageModule)
  },
  {
    path: 'prevention',
    loadChildren: () => import('./prevention/prevention.module').then( m => m.PreventionPageModule)
  },
  {
    path: 'info-person',
    loadChildren: () => import('./info-person/info-person.module').then( m => m.InfoPersonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsPageRoutingModule {}
