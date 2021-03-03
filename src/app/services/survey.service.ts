import { Portal } from '@angular/cdk/portal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  public email:BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public formSubmission:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public token:BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private responseToken;
  public Id:BehaviorSubject<number> = new BehaviorSubject<number>(null);
  public logIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); 
  constructor(private _http: HttpClient) { }

  getToken():Observable<any>{
    return this._http.post('https://192.168.10.62/fmi/data/v1/databases/surveyApp_v1/sessions',{});
  }

  postSurvey(data):Observable<any>{
    return this._http.post('https://192.168.10.62/fmi/data/v1/databases/surveyApp_v1/layouts/surveyApp/records',data);
  }

  getdata(id):Observable<any>{
    return this._http.get(`https://192.168.10.62/fmi/data/v1/databases/surveyApp_v1/layouts/surveyApp/records/${id}`);
  }

  getAllData(){
    return this._http.get('https://192.168.10.62/fmi/data/v1/databases/surveyApp_v1/layouts/surveyApp/records');
  }

  tokenKey(){
    this.token.subscribe(token=>{
     this.responseToken =token;
    });
    return this.responseToken;
  }
}
