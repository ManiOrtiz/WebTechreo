import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPersonPage } from './info-person.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPersonPageRoutingModule {}
