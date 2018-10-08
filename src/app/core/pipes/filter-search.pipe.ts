import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(array: any, searchString?: string): any {
    if(searchString === '') {
      return array;
    }

    return array.filter((element) => {
      return element.name.includes(searchString);
    });
  }
}
