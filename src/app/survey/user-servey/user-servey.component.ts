import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-user-servey',
  templateUrl: './user-servey.component.html',
  styleUrls: ['./user-servey.component.css']
})
export class UserServeyComponent implements OnInit {

  productReview = ['Buggy', 'Fine, but there are some issues', 'Great'];
  features = ['Custom responses', 'Custom integrations', 'Design', 'Great html code', 'Easy navigation'];
  responsive = ['Very responsive', 'Usually responsive', 'Not responsive'];
  public emailData: string;
  public edit: boolean = false;
  constructor(private email:SurveyService) {}

  ngOnInit() {
   this.email.email.subscribe(data=>{
     this.emailData = data;
   })
  }

  EditChange(value){
    if(this.edit){
      this.email.email.next(value);
    }
  }
}
