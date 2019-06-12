import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let start: Date;
        if (req.method === 'GET') {
            start = new Date();
        }

        return next.handle(req)
            .pipe(
                map((event: HttpEvent<any>) => {
                    if (start) {
                        const end = new Date();
                        console.log(new DatePipe(`en-US`).transform(end.getTime() - start.getTime(), 'm:s:SSS'));
                    }

                    return event;
                })
            );

    }
}
