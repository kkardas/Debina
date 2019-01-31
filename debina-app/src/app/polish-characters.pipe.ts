import { Pipe, PipeTransform } from '@angular/core';
import {ToLatinMap} from "./LatinMap";

@Pipe({
  name: 'polishCharacters'
})
export class PolishCharactersPipe implements PipeTransform {

  transform(value: string): string {
    if (value)
      return value.replace(/[^a-zA-Z0-9-_]/g, char => ToLatinMap.get(char) || '');
  }

}
