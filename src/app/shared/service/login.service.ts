import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { UtilsService } from '../util/utils.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  firebaseauth: AngularFireAuth
  db: AngularFireDatabase
  router: Router
  util: UtilsService
  myDate: any

  constructor(
    firebaseauth: AngularFireAuth,
    db: AngularFireDatabase,
    router: Router,
    util: UtilsService
  ) {
    this.firebaseauth = firebaseauth,
    this.db = db,
    this.router = router,
    this.util = util
  }
  
  login(user: User) {
    this.myDate = this.firebaseauth.signInWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        this.myDate = result['user']
        this.util.toast('Login efetuado com sucesso');
        this.saveUser(result, user)
        this.router.navigate(['/tabs/lista']);
      })
      .catch((erro: any) => {
        this.util.toast(erro);
      });
  }

  async updateProfile(user: User) {
    const profile = {
        displayName: user.name,
        photoURL: 'https://i.pinimg.com/originals/47/c9/a7/47c9a75f5db30562aa87d2ddcd98fc99.jpg'
    }
    return (await this.firebaseauth.currentUser).updateProfile(profile)
    .then((result) => {
      console.log(result)
    })
    .catch((erro) => console.log(erro));
}

  saveUser(result: any, user: User) {
    user.id = result['user']['uid']
    user.name = result['user']['displayName']
    user.image = result['user']['photoURL']
    //limpando pra nao salvar senha
    user.password = null
    //
    let json = JSON.stringify(user);
    localStorage.setItem('user', json);
  }

  getUser(user: User) {
    this.firebaseauth.onAuthStateChanged((user) => {
      if (user) {
        this.myDate = user;
        console.log(this.myDate);
        this.updateUser(user)
      }
    })
  }

  updateUser(user: User) {
    this.myDate.updateProfile({
      displayName: user.name,
      photoURL: user.image
    })
      .then((data) => {
        console.log(data);
      })
      .catch(err => {
        console.log(` failed ${err}`);
      });
  }

  isExist(): boolean {
    if(localStorage.getItem('user') == null) {
      return false
    }
    return true
  }

  newPassword(email: string) {
    this.firebaseauth.sendPasswordResetEmail(email)
      .then(() => {
        this.util.toast('E-mail enviado');
      })
      .catch((erro: any) => {
        this.util.toast(erro);
      });
  }

  logout() {
    this.firebaseauth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.util.toast('Você saiu');
        this.router.navigate(['/']);
      })
      .catch((erro: any) => {
        this.util.toast(erro);
      });
  }
 
}