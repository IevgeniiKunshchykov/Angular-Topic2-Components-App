import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {

  // Есть стандартный веб апи localStorage, который позволяет в браузере ххранить данные
  // Этот сервис должен быть оберткой вокруг такого апи.
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

  private items: string[] = [];
  private items$: Observable<string[]> = of(this.items);

  constructor() { }

  getItem(): Observable<string[]> {
    return this.items$;
  }

  setItem(item: string) {

    this.items.push(item);
  }

  removeItem(item: string) {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }
}
