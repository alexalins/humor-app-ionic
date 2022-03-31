import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddComponent } from './button-add.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ButtonAddComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [ButtonAddComponent]
})
export class ButtonAddModule { }
