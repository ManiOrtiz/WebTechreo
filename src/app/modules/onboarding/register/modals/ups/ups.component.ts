import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ups',
  templateUrl: './ups.component.html',
  styleUrls: ['./ups.component.scss'],
})
export class UpsComponent implements OnInit {

  constructor(
      private modalController:ModalController,
      private router: Router,) { }

  ngOnInit() {}

  async ok(){
    await this.modalController.dismiss();
    this.router.navigateByUrl('/start/elements/info-person');
  }

}
