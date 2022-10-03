import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {

  step:boolean = false;
  constructor( private modalController:ModalController, ) { }

  ngOnInit() {}

  async cancel(){
    await this.modalController.dismiss();
  }

  send(){
    this.step = false
  }

}
