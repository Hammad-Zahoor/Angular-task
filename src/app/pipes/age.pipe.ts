import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value: number, ages?: string): string {
    if(ages == "1")
      {
        return "age = " + value;
      }
      else{
        return "age == " + value;
      }
  }

}
