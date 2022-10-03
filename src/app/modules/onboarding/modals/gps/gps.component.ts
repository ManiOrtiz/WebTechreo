import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss'],
})
export class GpsComponent implements OnInit {

  constructor(
    private modalController:ModalController,
    private geolocation: Geolocation) { }

  ngOnInit() {}

  apecept(){
    this.geolocation.getCurrentPosition().then(async (resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      let long = resp.coords.longitude.toString();
      localStorage.setItem('longitude',long)
      console.log(resp.coords.longitude);
      setTimeout(async () => {
        await this.modalController.dismiss();
      }, 1000);
      

      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  async cancel(){
    await this.modalController.dismiss();
  }

}
