import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSendFeelingComponent } from 'src/app/shared/component/modal-send-feeling/modal-send-feeling.component';
import { Feeling } from 'src/app/shared/model/Feeling';
import { Item } from 'src/app/shared/model/Item';
import { User } from 'src/app/shared/model/User';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  list: number[] = [1, 2, 3];
  user: User = {  
    name: "Alexa"
  }

  feeling: Feeling = {  
    name: "Fofa",
    image: "https://firebasestorage.googleapis.com/v0/b/humor-app-7a94a.appspot.com/o/feeling%2Ficone-fofa-cor.png?alt=media&token=d7996d2a-e52a-43dc-a4e4-5f8786806812"
  }

  item: Item = {
    date: '30/03/2022',
    user: this.user,
    feeling: this.feeling
  }

  constructor() { }

  ngOnInit() {
  }

  
}
