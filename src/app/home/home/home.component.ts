import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private email:SurveyService, private router:Router) { }

  ngOnInit(): void {
  }

  checkEmail(value){
    if(value){
      this.email.email.next(value);
      this.router.navigate(['/survey']);
    }

  }
}
