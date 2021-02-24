import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { SurveyService } from '../services/survey.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  email: string;
  constructor(private auth: SurveyService, private _router: Router){}

  canActivate(): boolean{
    this.auth.email.subscribe(data=>{
      this.email = data;
    })
      if(this.email){
        return true;
      }
      else{
        this._router.navigate(['']);
        return false;
      }
   
  }
}