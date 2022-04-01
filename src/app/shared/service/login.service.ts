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
    this.firebaseauth.signInWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        this.util.toast('Login efetuado com sucesso');
        this.saveUser(result, user)
        this.router.navigate(['/tabs/lista']);
      })
      .catch((erro: any) => {
        this.util.toast(erro);
      });
  }

  saveUser(result: any, user: User) {
    user.id = result['user']['uid']
    user.name = result['user']['displayName']
    user.image = result['user']['photoURL']
    //limpando pra nao salvar senha
    user.password = null
    console.log(user)
    //
    let json = JSON.stringify(user);
    localStorage.setItem('user', json);
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