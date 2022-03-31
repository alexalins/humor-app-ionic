import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-send-feeling',
  templateUrl: './modal-send-feeling.component.html',
  styleUrls: ['./modal-send-feeling.component.scss'],
})
export class ModalSendFeelingComponent implements OnInit {
  modalController: ModalController
  cardSelecionado: string = "card"
  list: number[] = [1, 2, 3, 4, 5];

  constructor(modalController: ModalController) { 
    this.modalController = modalController
  }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  tapCard(id) {
    console.log(id)
    console.log(this.list.keys )
    this.cardSelecionado === "card" || this.list.keys == id ? this.cardSelecionado = "card-selecionado" : this.cardSelecionado = "card"
  }
}
