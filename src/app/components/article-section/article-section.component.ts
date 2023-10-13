import { Component } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo.model';

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.scss']
})
export class ArticleSectionComponent {
  trendingArticle: CardInfo = {
    imgSrc: 'assets/cards/lasagna.jpg',
    title: 'Receita Clássica de Lasanha à Bolonhesa',
    body: 'Explore o delicioso mundo da cozinha italiana com esta receita clássica de lasanha à bolonhesa. Camadas suculentas de carne moída, molho de tomate caseiro e queijo derretido se unem para criar uma lasanha que é uma verdadeira obra de arte culinária. Prepare-se para uma explosão de sabores e uma experiência gastronômica que vai deixar todos à mesa pedindo mais.'
  }
  articles: CardInfo[] = [
    {
      imgSrc: 'assets/cards/chicken.jpg',
      title: 'Frango Assado com Ervas Mediterrâneas'
    },
    {
      imgSrc: 'assets/cards/spinach.jpg',
      title: 'Salada de Espinafre com Morangos e Queijo de Cabra'
    },
    {
      imgSrc: 'assets/cards/brownie.jpg',
      title: 'Brownie de Chocolate com Nozes'
    },
    {
      imgSrc: 'assets/cards/tomato.webp',
      title: 'Sopa de Tomate Caseira'
    }
  ]
}
