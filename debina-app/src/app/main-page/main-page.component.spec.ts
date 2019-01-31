import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import {ParallaxComponent} from "../parallax/parallax.component";
import {AppRoutingModule} from "../app-routing.module";
import {OfferComponent} from "../offer/offer.component";
import {ContactComponent} from "../contact/contact.component";
import {TariffComponent} from "../tariff/tariff.component";
import {FooterComponent} from "../footer/footer.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {FormsModule} from "@angular/forms";
import {APP_BASE_HREF, CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {AgmCoreModule} from "@agm/core";

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationBarComponent,
        FooterComponent,
        ContactComponent,
        ParallaxComponent,
        MainPageComponent,
        TariffComponent,
        OfferComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAJFAuBKgZjhaNPjaLEXpmeD5AdGDcXN1U'
        })],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
