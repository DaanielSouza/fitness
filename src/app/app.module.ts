import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { ExercisesComponent } from './main/exercises/exercises.component';
import { Banner1Component } from './main/banner1/banner1.component';
import { PrecosComponent } from './main/precos/precos.component';
import { Banner2Component } from './main/banner2/banner2.component';
import { ContatoComponent } from './main/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CarouselComponent,
    ExercisesComponent,
    Banner1Component,
    PrecosComponent,
    Banner2Component,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
