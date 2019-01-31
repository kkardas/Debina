import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'char'
})
export class CharPipe implements PipeTransform {

  transform(value: string): string{
    if (value)
      return value.replace(' ', '_');
  }

}
