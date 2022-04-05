import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Item } from 'src/app/shared/model/Item';
import { FeelingService } from 'src/app/shared/service/feeling.service';
import { LocalNotifications, LocalNotificationSchema } from '@capacitor/local-notifications';
import { User } from 'src/app/shared/model/User';
import { UtilsService } from 'src/app/shared/util/utils.service';
import { LoginService } from 'src/app/shared/service/login.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  feelingService: FeelingService
  loginService: LoginService
  subscription: Subscription;
  user: User
  items: Item[] = []
  util: UtilsService

  constructor(feelingService: FeelingService, private platform: Platform) { 
    this.feelingService = feelingService
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.util.alertLogout(this.loginService)
    })
  }

  ngOnInit() {
    let json = localStorage.getItem('user');
    this.user = JSON.parse(json);
    this.getAllFeeling()
  }


  getAllFeeling() {
    let item: Observable<any>;
    item = this.feelingService.getAllItemFeeling();
    item.subscribe(data => {
      if(this.items.length > 0 && this.items.length < data.length) {
        let ultimo: number = this.items.length
        if(data[ultimo].user.id != this.user.id) {
          this.notification()
        }
      }
      this.items = data
      this.items = this.items.reverse()
    })
  }

  notification() {
    let options: LocalNotificationSchema = {
      id: 1,
      title: 'Sentimento novo!',
      body: 'Seu amor adicionou um sentimento novo!',
      sound: 'file://assets/sounds/notification.mp3'
    }
    LocalNotifications.schedule({notifications: [options]})
    .then(() => {
      console.log("notification deu certo");
    })
    .catch((erro) => {
      console.log("notification deu errado");
    })
  }
  
}
