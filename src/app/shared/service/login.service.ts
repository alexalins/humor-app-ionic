import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  firebaseauth: AngularFireAuth
  db: AngularFireDatabase
  toastController: ToastController
  router: Router

  constructor(
    firebaseauth: AngularFireAuth,
    db: AngularFireDatabase,
    toastController: ToastController,
    router: Router,
  ) {
    this.firebaseauth = firebaseauth,
      this.db = db,
      this.toastController = toastController
    this.router = router
  }

  login(user: User) {
    this.firebaseauth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.toast('Login efetuado com sucesso');
        console.log(this.firebaseauth.user);
        //this.recoverUser(user.email);
        this.router.navigate(['/tabs/lista']);
      })
      .catch((erro: any) => {
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

  private async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top"
    });
    toast.present();
  }
}