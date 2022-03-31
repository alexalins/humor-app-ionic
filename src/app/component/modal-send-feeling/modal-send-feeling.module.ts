import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalSendFeelingComponent } from './modal-send-feeling.component';


@NgModule({
  declarations: [ModalSendFeelingComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ModalSendFeelingComponent]
})
export class ModalSendFeelingModule { }
