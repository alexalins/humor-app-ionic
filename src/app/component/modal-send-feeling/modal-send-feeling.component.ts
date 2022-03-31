import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-send-feeling',
  templateUrl: './modal-send-feeling.component.html',
  styleUrls: ['./modal-send-feeling.component.scss'],
})
export class ModalSendFeelingComponent implements OnInit {
  modalController: ModalController
  card: string = "card"
  cardSelecionado: string = "card-selecionado"
  idCard: number = 0
  list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(modalController: ModalController) { 
    this.modalController = modalController
  }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  tapCard(id) {
    this.idCard = id
  }
}
