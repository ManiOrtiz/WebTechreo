import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UpsComponent } from '../modals/ups/ups.component';

@Component({
  selector: 'app-prevention',
  templateUrl: './prevention.page.html',
  styleUrls: ['./prevention.page.scss'],
})
export class PreventionPage implements OnInit {

  guidSolicitud = 'dklj12jlk2j3123kljasd';
  guidCliente = '';

  constructor(
      private router: Router,
      private modalController: ModalController,) { }

  ngOnInit() {
  }

  async ok(){

    const modal = await this.modalController.create({
      component: UpsComponent,
      animated: true,
      mode: "ios",
      backdropDismiss: true,
      cssClass: "gps-modal",
    });
    modal.present();

  }

  back(){
      this.router.navigateByUrl('/start/elements/pass-reg');
  }
}
