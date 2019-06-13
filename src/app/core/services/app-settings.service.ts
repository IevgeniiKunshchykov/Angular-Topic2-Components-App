import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private defaultOrdersApi = 'http://localhost:3000/orders';

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient) {
  }

  getOrdersApi(): Observable<string> {

    const ordersApi = this.localStorageService.getItemByKey('ordersApi');

    if (ordersApi) {
      return of(ordersApi);
    }

    return this.http.get<any>('./assets/app-settings.json')
      .pipe(
        map(settings => {
          if (settings.ordersUrl) {
            this.setDefaultOrderApi(settings.ordersUrl);
            return settings.ordersUrl;
          } else {
            this.setDefaultOrderApi(this.defaultOrdersApi);
            return this.defaultOrdersApi;
          }
        }),
        catchError(error => {
          this.setDefaultOrderApi(this.defaultOrdersApi);
          return this.defaultOrdersApi;
        })
      );
  }

  private setDefaultOrderApi(url: string) {
    this.localStorageService.setItemByKey('ordersApi', url);
  }
}
