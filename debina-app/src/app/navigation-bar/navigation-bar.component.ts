import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { Header } from '../Header';
import { DataService} from '../data.service';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  public logoHeight: number;
  public isMobileMenuOpened: boolean;
  public isComputerMenuOpened: boolean;

  constructor(public dataService: DataService) {
  }

  @ViewChild('logo')
  myIdentifier: ElementRef;

  ngOnInit() {
    this.logoHeight = this.myIdentifier.nativeElement.clientHeight;
    if(window.innerWidth > 767) {
      this.isMobileMenuOpened = false;
      this.isComputerMenuOpened = true;
    } else {
      this.isComputerMenuOpened = false;
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrolledPixels = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (this.isScrolledUnderLogo(scrolledPixels)) {
      this.hideLogo();
    } else if (this.isAboveLogo(scrolledPixels)){
      this.showLogo();
    }
  }

  @HostListener("window:resize", [])
  onResize() {
    if(window.innerWidth > 767) {
      this.isMobileMenuOpened = false;
      this.isComputerMenuOpened = true;
    } else {
      this.isComputerMenuOpened = false;
    }
  }

  public deletePropagation(event, activeHeader){
    event.stopPropagation();
    this.dataService.setSelectedHeader(activeHeader);
  }

  private isScrolledUnderLogo(scrolledPixels: number) {
    return scrolledPixels > this.logoHeight;
  }

  private isAboveLogo(scrolledPixels: number) {
    return scrolledPixels <= this.logoHeight;
  }

  private hideLogo() {
    this.myIdentifier.nativeElement.style.display = 'none';
    this.logoHeight = 0;
  }

  private showLogo() {
    this.myIdentifier.nativeElement.style.display = 'block';
    this.logoHeight = this.myIdentifier.nativeElement.clientHeight;
  }

  public toggleMobileMenu() {
    this.isMobileMenuOpened = !this.isMobileMenuOpened;
  }

  onClickedOutside() {
    if (this.isMobileMenuOpened) {
      this.isMobileMenuOpened = false;
    }

  }
}
