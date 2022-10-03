import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor( 
    private router: Router,
    private modalController:ModalController) { }

  ngOnInit() {}

  async apecept(){
    await this.modalController.dismiss();
    this.router.navigateByUrl('/start/elements/phone');
  }

}
