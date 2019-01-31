import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';
import {DataService} from "../data.service";
import {ContactComponent} from "../contact/contact.component";
import {ParallaxComponent} from "../parallax/parallax.component";
import {MainPageComponent} from "../main-page/main-page.component";
import {FooterComponent} from "../footer/footer.component";
import {OfferComponent} from "../offer/offer.component";
import {TariffComponent} from "../tariff/tariff.component";
import {AppRoutingModule} from "../app-routing.module";
import {APP_BASE_HREF, CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {BrowserModule} from "@angular/platform-browser";
import {CharPipe} from "../char.pipe";

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationBarComponent,
        FooterComponent,
        ContactComponent,
        ParallaxComponent,
        MainPageComponent,
        TariffComponent,
        OfferComponent,
        CharPipe],
      imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAJFAuBKgZjhaNPjaLEXpmeD5AdGDcXN1U'
        })],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
