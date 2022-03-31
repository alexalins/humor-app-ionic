import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() {
    const app = initializeApp(firebaseConfig);
  }
}
