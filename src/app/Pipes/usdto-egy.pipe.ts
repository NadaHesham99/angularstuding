import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEGY'
})
export class USDtoEGYPipe implements PipeTransform {

  transform(value?: number): unknown {
    return value !=null? value * 30 : 0;
  }

}
