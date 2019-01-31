import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { TariffComponent } from './tariff/tariff.component';
import { ContactComponent } from './contact/contact.component';
import {DataService} from "./data.service";
import { OfferComponent } from './offer/offer.component';
import { CharPipe } from './char.pipe';
import {MailService} from "./mail.service";
import {HttpClientModule} from "@angular/common/http";
import {ClickOutsideModule} from "ng-click-outside";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { PolishCharactersPipe } from './polish-characters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    ParallaxComponent,
    MainPageComponent,
    TariffComponent,
    ContactComponent,
    OfferComponent,
    CharPipe,
    PolishCharactersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJFAuBKgZjhaNPjaLEXpmeD5AdGDcXN1U'
    })
  ],
  providers: [DataService,
              MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
