import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  header: string;
  specificHeader: string;
  specificHeaders: string[];
  text: string;
  navigationSubscription;

  constructor(public dataService: DataService,
              private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    const pathArray = window.location.pathname.split('/');
    if (pathArray.find((e) => e === 'Stomatologia')) {
      this.header = 'Stomatologia';
    } else {
      this.header = 'Kardiologia';
    }
    this.specificHeader = pathArray[pathArray.length - 1];
    this.text = '';
    this.getSpecificHeaders();
  }

  ngOnInit() {
  }

  public getSpecificHeaders() {
    this.dataService.getSpecificHeaders(this.header)
      .subscribe(specificHeader => {
        this.specificHeaders = specificHeader.internalHeaders;
        if (this.isSpecificHeaderCorrect())
          this.refreshData(this.specificHeader);
      });
  }

  public refreshData(specificHeader: string) {
    this.specificHeader = this.dataService.replaceUnnecessaryCharacters(specificHeader);
    if (this.isSpecificHeaderCorrect())
      this.dataService.getSpecificText(this.header,
                                       this.specificHeader)
        .subscribe(specificHeaderTemp =>
          this.text = specificHeaderTemp.text
        );
    this.dataService.setSelectedSpecificHeader(this.specificHeader);
    this.dataService.setSelectedHeader(this.header);
  }

  private isSpecificHeaderCorrect() {
    return this.specificHeader !== 'Kardiologia' && this.specificHeader !== 'Stomatologia';
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
