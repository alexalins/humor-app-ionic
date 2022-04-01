import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import Utils from '../util/Utils';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  firebaseauth: AngularFireAuth
  db: AngularFireDatabase
  router: Router
  toastController: ToastController

  constructor(
    firebaseauth: AngularFireAuth,
    db: AngularFireDatabase,
    router: Router,
    toastController: ToastController
  ) {
    this.firebaseauth = firebaseauth,
    this.db = db,
    this.router = router,
    this.toastController = toastController
  }

  login(user: User) {
    this.firebaseauth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.toast('Login efetuado com sucesso');
        console.log(this.firebaseauth);
        //this.recoverUser(user.email);
        //this.router.navigate(['/tabs/lista']);
      })
      .catch((erro: any) => {
        console.log(erro)
        this.toast(erro);
      });
  }

  newPassword(email: string) {
    this.firebaseauth.sendPasswordResetEmail(email)
      .then(() => {
        this.toast('E-mail enviado');
      })
      .catch((erro: any) => {
        this.toast(erro);
      });
  }

  logout() {
    this.firebaseauth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.toast('Você saiu');
      })
      .catch((erro: any) => {
        this.toast(erro);
      });
  }

  async toast(message: string) {
    const toast = await this.toastController.create({
        message: message,
        duration: 2000,
        position: "top"
    });
    toast.present();
}
}