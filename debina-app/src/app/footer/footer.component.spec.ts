import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {DataService} from "../data.service";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import {TariffComponent} from "../tariff/tariff.component";
import {ContactComponent} from "../contact/contact.component";
import {OfferComponent} from "../offer/offer.component";
import {MainPageComponent} from "../main-page/main-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {AgmCoreModule} from "@agm/core";
import {APP_BASE_HREF, CommonModule} from "@angular/common";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {ParallaxComponent} from "../parallax/parallax.component";
import {CharPipe} from "../char.pipe";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

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
        })
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
