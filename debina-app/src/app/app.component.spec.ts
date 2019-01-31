import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import {FooterComponent} from "./footer/footer.component";
import {AppRoutingModule} from "./app-routing.module";
import {TariffComponent} from "./tariff/tariff.component";
import {ContactComponent} from "./contact/contact.component";
import {ParallaxComponent} from "./parallax/parallax.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {OfferComponent} from "./offer/offer.component";
import {FormsModule} from "@angular/forms";
import {APP_BASE_HREF, CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {AgmCoreModule} from "@agm/core";
import {DataService} from "./data.service";
import {CharPipe} from "./char.pipe";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationBarComponent,
        FooterComponent,
        ContactComponent,
        ParallaxComponent,
        MainPageComponent,
        TariffComponent,
        OfferComponent,
        CharPipe
      ],
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
