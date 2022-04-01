import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSendFeelingComponent } from '../modal-send-feeling/modal-send-feeling.component';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss'],
})
export class ButtonAddComponent implements OnInit {

  private modalController: ModalController

  constructor(modalController: ModalController) {
    this.modalController = modalController;
   }

  ngOnInit() {}

  async modalSendFeeling() {
    console.log("modalSendFeeling")
    const modal = await this.modalController.create({
      component: ModalSendFeelingComponent
    });
    return await modal.present();
  }
}
