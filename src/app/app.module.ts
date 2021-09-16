import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { HelloSectionComponent } from './components/hello-section/hello-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContainerComponent,
    HelloSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
