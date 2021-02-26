import { Portal } from '@angular/cdk/portal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  public email:BehaviorSubject<string> = new BehaviorSubject<string>('');
  public formSubmission:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient) { }

  data={
    fieldData:{
        Name_xt : 'Ashish',
        Email_xt: 'kaushik@gamil.com'
    },
    portalData:{
      featureDetails:[
       {'featureDetails::Feature_xt': 'good'},
       {'featureDetails::Feature_xt': 'hellllo'}
    
      ]
    }
  }
  
  getToken():Observable<any>{
    return this._http.post('https://192.168.10.62/fmi/data/v1/databases/surveyApp/sessions',{});
  }

  postSurvey(data):Observable<any>{
    return this._http.post('https://192.168.10.62/fmi/data/v1/databases/surveyApp/layouts/surveyApp/records',data);
  }
}
