import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SurveyService } from '../services/survey.service';

@Injectable({
  providedIn: 'root'
})
export class SubmissionGuard implements CanActivate {

  constructor(private form:SurveyService, private route: Router){}
  private submit:boolean;
  canActivate(): boolean{
    this.form.formSubmission.subscribe(data=>{
      this.submit = data;
    })
      if(this.submit){
        return true;
      }
      else{
        this.route.navigate(['']);
        return false;
      }
   
  }
  
}
