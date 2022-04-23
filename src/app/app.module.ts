import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { HelloSectionComponent } from './components/hello-section/hello-section.component';
import { PhotoComponent } from './components/photo/photo.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { TravelSectionComponent } from './components/travel-section/travel-section.component';
import { TravelPhotoComponent } from './components/travel-photo/travel-photo.component';
import { WhatIDoSectionComponent } from './components/what-i-do-section/what-i-do-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContainerComponent,
    HelloSectionComponent,
    PhotoComponent,
    AboutSectionComponent,
    TravelSectionComponent,
    TravelPhotoComponent,
    WhatIDoSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
