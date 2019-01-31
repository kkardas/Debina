import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferComponent } from './offer.component';
import {AppRoutingModule} from "../app-routing.module";
import {TariffComponent} from "../tariff/tariff.component";
import {MainPageComponent} from "../main-page/main-page.component";
import {ParallaxComponent} from "../parallax/parallax.component";
import {ContactComponent} from "../contact/contact.component";
import {FooterComponent} from "../footer/footer.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule, APP_BASE_HREF} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {DataService} from "../data.service";
import {CharPipe} from "../char.pipe";

describe('OfferComponent', () => {
  let component: OfferComponent;
  let fixture: ComponentFixture<OfferComponent>;

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
    fixture = TestBed.createComponent(OfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('')
});
