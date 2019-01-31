import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude: number = 49.678525;
  longitude: number = 21.806143;
  defaultZoom: number = 13;

  constructor() { }

  ngOnInit() {
  }

}
