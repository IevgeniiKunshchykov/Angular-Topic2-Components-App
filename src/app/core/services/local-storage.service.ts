import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {

  private itemSubj: Subject<string> = new Subject<string>();
  private item$ : Observable<string> = this.itemSubj.asObservable();

  constructor() { }

  getItem(): Observable<string> {
    return this.item$;
  }

  setItem(item: string) {
    window.localStorage.setItem('item', item);
    this.itemSubj.next(window.localStorage.getItem('item'));
  }

  removeItem(item: string) {
    window.localStorage.removeItem('item');
    this.itemSubj.next(null);
  }
}
