import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Feeling } from '../../model/Feeling';
import { Item } from '../../model/Item';
import { User } from '../../model/User';
import { FeelingService } from '../../service/feeling.service';
import { UtilsService } from '../../util/utils.service';

@Component({
  selector: 'app-modal-send-feeling',
  templateUrl: './modal-send-feeling.component.html',
  styleUrls: ['./modal-send-feeling.component.scss'],
})
export class ModalSendFeelingComponent implements OnInit {
  modalController: ModalController
  feelingService: FeelingService
  util: UtilsService
  //css
  card: string = "card"
  cardSelecionado: string = "card-selecionado"
  idCard: number = 0
  feelings: Feeling[] = []
  feeling: Feeling
  user: User

  constructor(modalController: ModalController, feelingService: FeelingService, util: UtilsService) { 
    this.modalController = modalController
    this.feelingService = feelingService
    this.util = util
  }

  ngOnInit() {
    this.util.toast("Carregando...")
    let json = localStorage.getItem('user');
    this.user = JSON.parse(json);
    this.getAllFeelings()
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  selectCard(feeling: Feeling) {
    this.idCard = feeling.id
    this.feeling = feeling
  }

  getAllFeelings() {
    let feeling: Observable<any>;
    feeling = this.feelingService.getAllFeeling()
    feeling.subscribe(data => {
      this.feelings = data
    })
  }

  saveFeeling() {
    let item: Item = new Item()
    item.user = this.user
    item.feeling = this.feeling
    item.date = this.util.getDate()
    //item.id = this.util.getCurrentTime()
    //
    if(this.feelingService.newFeeling(item)) {
      this.dismissModal()
    }
  }
  
}
