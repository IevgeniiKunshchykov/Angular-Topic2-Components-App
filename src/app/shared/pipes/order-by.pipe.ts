import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], sortProperty: string, sortOrder: boolean): any {

    if (!sortProperty) {
      return value;
    }

    if (value && Array.isArray(value)) {
      return value.sort((a: any, b: any) => {

        if (a[sortProperty] > b[sortProperty]) {
          return sortOrder ? 1 : -1;
        } else if (a[sortProperty] < b[sortProperty]) {
          return sortOrder ? -1 : 1;
        } else {
          return 0;
        }
      });
    } else {
      return value;
    }
  }
}
