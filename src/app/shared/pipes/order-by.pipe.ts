import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderByPipe implements PipeTransform {

  // sortOrder - булевое
  transform(value: any[], sortProperty: string, sortOrder: string): any {

    if (!sortProperty) {
      return value;
    }

    // Не совсем понятна логика
    // Если значение буде не массивом, а например, числом 10.
    // Я думаю, Array.isArray() стоит использовать
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
