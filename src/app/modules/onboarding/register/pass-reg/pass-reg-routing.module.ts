import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassRegPage } from './pass-reg.page';

const routes: Routes = [
  {
    path: '',
    component: PassRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassRegPageRoutingModule {}
