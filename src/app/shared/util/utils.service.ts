import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  toastController: ToastController
  alertController: AlertController

  constructor(toastController: ToastController, alertController: AlertController)
   { this.toastController = toastController, this.alertController = alertController }

  async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

  async alertPassword(service: LoginService) {
    const alert = await this.alertController.create({
      header: 'Insira seu e-mail para recuperar senha',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'E-mail'
        }
      ],
      cssClass:'buttonCss',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Enviar',
          handler: (data) => {
            service.newPassword(data.email);
          }
        }
      ]
    });

    await alert.present();
  }
}
