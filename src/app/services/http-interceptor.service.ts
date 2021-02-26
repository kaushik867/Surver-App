import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  httpOptions = btoa('Admin:mindfire');
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url == 'https://192.168.10.62/fmi/data/v1/databases/surveyApp/sessions')
    {
       req = req.clone({
         setHeaders: {
           'Authorization': `Basic ${this.httpOptions}`,
        },
       });
    }
    else{
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
       },
      });
      localStorage.clear();
    }
    return next.handle(req);
  }
}
