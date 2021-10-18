import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casing'
})
export class CasingPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
