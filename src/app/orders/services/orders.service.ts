import { Injectable } from '@angular/core';
import { IOrder } from '../interfaces/ioder';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private ordersUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrder[]> {
    return this.http
      .get<IOrder[]>(this.ordersUrl)
      .pipe(catchError(this.handleErrorObservable));
  }

  getOrder(id: number): Promise<IOrder> {
    const url = `${this.ordersUrl}/${id}`;

    return this.http
      .get<IOrder>(url)
      .toPromise()
      .then(order => order as IOrder)
      .catch(this.handleErrorPromise);
  }

  deleteOrder(id: number): Promise<IOrder> {
    const url = `${this.ordersUrl}/${id}`;

    return this.http
      .delete<IOrder>(url)
      .toPromise()
      .catch(this.handleErrorPromise);
  }

  makeOrder(order: IOrder): Observable<IOrder> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<IOrder>(this.ordersUrl, JSON.stringify(order), options)
      .pipe(catchError(this.handleErrorObservable));
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
