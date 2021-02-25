import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  public email:BehaviorSubject<string> = new BehaviorSubject<string>('');
  public formSubmission:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}
