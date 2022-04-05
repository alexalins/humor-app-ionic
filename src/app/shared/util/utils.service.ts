import { Injectable } from '@angular/core';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { FeelingService } from '../service/feeling.service';
import { LoginService } from '../service/login.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  toastController: ToastController
  alertController: AlertController

  constructor(toastController: ToastController, alertController: AlertController, private platform: Platform)
   { this.toastController = toastController, this.alertController = alertController }

  async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: "bottom"
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

  async alertLogout(service: LoginService) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Quer sair do aplicativo?',
      cssClass:'buttonCss',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Sim',
          handler: (data) => {
            service.logout()
          }
        }
      ]
    });

    await alert.present();
  }

  async alertConfirmDelete(id: string, service: FeelingService) {
    const alert = await this.alertController.create({
      header: 'Deseja apagar esse sentimento?',
      cssClass:'buttonCss',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            service.removeFeeling(id)
          }
        }
      ]
    });

    await alert.present();
  }

  getCurrentTime() {
    let dateTime = new Date()
    const datepipe: DatePipe = new DatePipe('en-US')
    let formattedDate = datepipe.transform(dateTime, 'HHmmss')
    return formattedDate
  }

  getDate() {
    let date = new Date();
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();

    if (day.length == 1)
      day = '0' + day;
    if (month.length == 1)
      month = '0' + month;

    let dateFormart = day + '/' + month + '/' + year;
    return dateFormart;
  }

  backButton(loginService) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.alertLogout(loginService)
    })
  }
}
