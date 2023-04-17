import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alturaPeso'
})
export class AlturaPesoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value/10;
  }

}
