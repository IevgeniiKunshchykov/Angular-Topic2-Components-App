import { Injectable } from '@angular/core';
import { IOrder } from '../interfaces/ioder';
import { Observable, of, throwError, pipe, from } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient,
    private appSettingsService: AppSettingsService
  ) { }

  getOrders(): Observable<IOrder[]> {
    return this.getOrdersApi()
      .pipe(
        switchMap(url => this.http.get<IOrder[]>(url))
      );
  }

  getOrder(id: number): Promise<IOrder> {
    return this.getOrdersApi()
      .toPromise()
      .then(url => this.http
        .get<IOrder>(`${url}/${id}`)
        .toPromise()
        .then(order => order as IOrder)
        .catch(this.handleErrorPromise));
  }

  deleteOrder(id: number): Promise<IOrder> {
    return this.getOrdersApi()
      .toPromise()
      .then(url => this.http
        .delete<IOrder>(`${url}/${id}`)
        .toPromise()
        .catch(this.handleErrorPromise));
  }

  makeOrder(order: IOrder): Observable<IOrder> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.getOrdersApi()
      .pipe(
        switchMap(url => this.http
          .post<IOrder>(url, JSON.stringify(order), options)
          .pipe(catchError(this.handleErrorObservable)))
      );
  }

  private getOrdersApi(): Observable<string> {
    return this.appSettingsService.getOrdersApi();
  }

  private handleErrorPromise(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private handleErrorObservable(err: HttpErrorResponse): Observable<any> {
    let errorMessage: string;

    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${
        err.error
        }`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
