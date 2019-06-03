import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], sortProperty: string, sortOrder: string): any {

    if (!sortProperty) {
      return value;
    }

    value = (value || []).sort((a: any, b: any) => {

      if (a[sortProperty] > b[sortProperty]) {
        return sortOrder ? 1 : -1;
      } else if (a[sortProperty] < b[sortProperty]) {
        return sortOrder ? -1 : 1;
      } else {
        return 0;
      }
    });

    return value;
  }
}
