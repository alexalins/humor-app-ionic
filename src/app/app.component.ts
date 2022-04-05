import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';
import { UtilsService } from './shared/util/utils.service';
import { LoginService } from './shared/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() {
    this.initFirebase()
    //this.initBackButton()
  }

  initFirebase() {
    const app = initializeApp(environment.firebase);
    if (Capacitor.isNativePlatform) {
      initializeAuth(app, {
        persistence: indexedDBLocalPersistence
      });
    }
  }

  initBackButton() {
    let util: UtilsService
    let loginService: LoginService
    util.backButton(loginService)
  }
}
