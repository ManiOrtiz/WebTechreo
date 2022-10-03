import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  async back(){
    await this.modalController.dismiss();
  }
  
  send(){

  }

}
