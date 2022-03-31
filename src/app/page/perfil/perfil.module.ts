import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { HeaderModule } from 'src/app/component/header/header.module';
import { CardFeelingModule } from 'src/app/component/card-feeling/card-feeling.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    HeaderModule,
    CardFeelingModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
