import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFeelingComponent } from './card-feeling.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CardFeelingComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [CardFeelingComponent]
})
export class CardFeelingModule { }
