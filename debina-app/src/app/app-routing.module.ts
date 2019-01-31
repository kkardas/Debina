import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TariffComponent} from "./tariff/tariff.component";
import {ContactComponent} from "./contact/contact.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {OfferComponent} from "./offer/offer.component";
import * as path from "path";

const routes: Routes = [
  {path: 'Cennik', component: TariffComponent, pathMatch: 'full'},
  {path: 'Kontakt', component: ContactComponent, pathMatch: 'full'},
  {path: 'Kardiologia', pathMatch: 'prefix', runGuardsAndResolvers: 'always',
   children: [
     {path: ':internalHeader', component: OfferComponent},
     {path: '', component: OfferComponent}]},
  {path: 'Stomatologia/:internalHeader', component: OfferComponent, pathMatch: 'full'},
  {path: 'Stomatologia', component: OfferComponent, pathMatch: 'full'},
  {path: '', component: MainPageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
