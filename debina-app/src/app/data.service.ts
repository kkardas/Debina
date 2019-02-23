import { Injectable } from '@angular/core';
import {Headers} from './HeadersMock';
import {of} from 'rxjs/observable/of';
import {StomaHeaders} from "./StomaHeaders";
import {KardioHeaders} from "./KardioHeadersMock";
import {ToLatinMap} from "./LatinMap";

@Injectable()
export class DataService {
  private selectedHeader: string;
  private selectedSpecificHeader: string;

  constructor() {
    this.selectedHeader = "";
    this.selectedSpecificHeader = "";
  }

  setSelectedHeader(selectedHeader: string) {
    this.selectedHeader = selectedHeader;
  }

  getSelectedHeader() {
    return this.selectedHeader;
  }

  setSelectedSpecificHeader(selectedSpecificHeader: string) {
    this.selectedSpecificHeader = selectedSpecificHeader;
  }

  getSelectedSpecificHeader() {
    return this.selectedSpecificHeader;
  }

  getHeaders() {
    return Headers ;
  }

  getSpecificHeaders(mainHeader: string) {
    return of(Headers.find((header) => header.header === mainHeader));
  }

  getSpecificText(header: string,
                  specificHeader: string) {
    if (header === 'Stomatologia') {
      return of(StomaHeaders.find((e) => this.replaceUnnecessaryCharacters(e.specificHeader) === specificHeader));
    } else {
      return of(KardioHeaders.find((e) => this.replaceUnnecessaryCharacters(e.specificHeader) === specificHeader));
    }
  }

  replaceUnnecessaryCharacters(text: string) {
    return text.replace(' ', '_').replace(/[^a-zA-Z0-9-_]/g, char => ToLatinMap.get(char) || '');
  }
}
