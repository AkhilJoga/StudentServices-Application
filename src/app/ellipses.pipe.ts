import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipses'
})
export class EllipsesPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    if(value.length>5){
      return value.substring(0,515)+ '....';
    }
    return value;
}

}
