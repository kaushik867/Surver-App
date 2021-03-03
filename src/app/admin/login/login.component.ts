import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { SurveyService } from 'src/app/services/survey.service';
import { environment }from '../../../environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login:boolean = false;
  constructor(public _http: SurveyService, private _router: Router) { }
  
  ngOnInit(): void {
   
  }

  formSubmit(formData){
    if(formData.value.user == environment.userName && formData.value.password == environment.password)
    {
        this._http.getToken().subscribe(token=>{
          this._http.token.next(token['response']['token']);
          this._http.logIn.next(true);
          this._router.navigate(['admin-panel']);
        })
    }
    else{
      this.login =true;
    }
  }
}
