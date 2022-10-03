import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { ContactComponent } from '../modals/contact/contact.component';
import { PasswordComponent } from '../modals/password/password.component';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { PasswordService } from '../service/password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPassword = false;
  showPass = false;
  passwordToggleIcon ='eye';
  passToggleIcon ='eye';
  signInForm: UntypedFormGroup;
  lat = '';
  long = '';
  loading: HTMLIonLoadingElement;


  constructor(
    private modalController: ModalController,
    private _formBuilder: UntypedFormBuilder,
    private geolocation: Geolocation,
    private passwordService:PasswordService,
    public loadingController: LoadingController,
    private router: Router
    ) {
      this.signInForm = this._formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', Validators.required],
        newPassword: ['', Validators.required],
    });
    this.geolocation.getCurrentPosition().then((resp) => {
      this.long = resp.coords.longitude.toString();
      this.lat = resp.coords.latitude.toString();
     }).catch((error) => {
       console.log('Error getting location', error);
     });

   }

  ngOnInit() {
  }


  signIn(): void {

    let arrar = {
        "nickName": this.signInForm.value.email,
        "oldPassword": this.signInForm.value.password,
        "newPassword": this.signInForm.value.newPassword,
        "geolocation": {
          "latitude":  this.lat,
          "longitude": this.long
        }
      }
      this.presentLoading();

      this.passwordService.getAuth(arrar).subscribe(
        (data) => {
          this.loading.dismiss();
          console.log(data);
        },
        (error) => {
          this.loading.dismiss();
        })

      console.log(arrar);


}
async presentLoading() {
  this.loading = await this.loadingController.create({
    cssClass: "my-custom-class",
    message: "Cargando...",
  });
  await this.loading.present();
}

  async passWord(){
    const modal = await this.modalController.create({
      component: PasswordComponent,
      animated: true,
      mode: "ios",
      backdropDismiss: false,
      cssClass: "login-modal",
    });
    modal.present();
  }

  async contact(){
    const modal = await this.modalController.create({
      component: ContactComponent,
      animated: true,
      mode: "ios",
      backdropDismiss: true,
      cssClass: "contact-modal",
    });
    modal.present();
  }

  togglePassword():void{
    this.showPassword = !this.showPassword;
    if(this.passwordToggleIcon =='eye'){
      this.passwordToggleIcon = 'eye-off';
    } else{
      this.passwordToggleIcon ='eye';
    }
  }

  togglePass():void{
    this.showPass = !this.showPass;
    if(this.passToggleIcon =='eye'){
      this.passToggleIcon = 'eye-off';
    } else{
      this.passToggleIcon ='eye';
    }
  }


  send(){


  }
  onPhone(){
    this.router.navigateByUrl('/start/elements/phone');
  }
}
