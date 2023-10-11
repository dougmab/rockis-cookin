import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from './big-card/big-card.component';
import { LittleCardComponent } from './little-card/little-card.component';



@NgModule({
  declarations: [
    BigCardComponent,
    LittleCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BigCardComponent,
    LittleCardComponent
  ]
})
export class CardModule { }
