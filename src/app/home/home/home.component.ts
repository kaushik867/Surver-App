import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http:SurveyService, private router:Router) { }

  ngOnInit(): void {
      this._http.getToken().subscribe(data=>{
        localStorage.setItem('token',data['response']['token']);
      })
  }

  checkEmail(email){
    if(email.valid){
      this._http.email.next(email.value);
      this.router.navigate(['/survey']);
    }

  }
}
