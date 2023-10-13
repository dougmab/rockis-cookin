import { Component, Input } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo.model';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent {
  @Input() content: CardInfo = {
    imgSrc: 'assets/salad_bg.jpg',
    title: 'Empty Title',
    body: 'Empty body.',
  };

  getImageSrc(): string {
    return `url(${this.content.imgSrc})`
  }
}
