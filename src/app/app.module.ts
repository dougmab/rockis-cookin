import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from './components/card/card.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ArticleSectionComponent } from './components/article-section/article-section.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    HeroSectionComponent,
    ArticleSectionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
