import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyService } from './survey.service';
import { environment } from '../../environments/environment'
import { SpinnerLoadService } from './spinner-load.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
 
  basic =btoa(environment.userName+':'+environment.password)
  constructor(public injector: Injector, public loader: SpinnerLoadService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.isLoading.next(true);
    if(req.url == 'https://192.168.10.62/fmi/data/v1/databases/surveyApp_v1/sessions')
    { 
       req = req.clone({
         setHeaders: {
           'Authorization': `Basic ${this.basic}`,
        },
       });
    }
    else{
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.injector.get(SurveyService).tokenKey()}`,
       },
      });
      localStorage.clear();
    }
    return next.handle(req).pipe(
      finalize(
        ()=>{
          this.loader.isLoading.next(false);
        }
      )
    );
  }
}
