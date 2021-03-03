import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SurveyService } from '../services/survey.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  login: boolean;
  constructor(private http: SurveyService, private router: Router){}
  canActivate(): boolean{
    this.http.logIn.subscribe(data=>{
      this.login = data;
    })
      if(this.login){
        return true;
      }
      else{
        this.router.navigate(['admin']);
        return false;
      }
   
  }
  
}
