import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';
import { HeaderModule } from 'src/app/component/header/header.module';
import { CardFeelingModule } from 'src/app/component/card-feeling/card-feeling.module';
import { ButtonAddModule } from 'src/app/component/button-add/button-add.module';
import { ModalSendFeelingModule } from 'src/app/component/modal-send-feeling/modal-send-feeling.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule,
    HeaderModule,
    CardFeelingModule,
    ButtonAddModule,
    ModalSendFeelingModule
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
