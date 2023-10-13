import { Component, Input } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo.model';

@Component({
  selector: 'app-little-card',
  templateUrl: './little-card.component.html',
  styleUrls: ['./little-card.component.scss']
})
export class LittleCardComponent {
  @Input() content: CardInfo = {
    imgSrc: 'assets/salad_bg.jpg',
    title: 'Empty Title',
  };

  getImageSrc(): string {
    return `url(${this.content.imgSrc})`
  }
}
