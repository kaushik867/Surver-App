import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, filter, delay} from 'rxjs/operators';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-user-servey',
  templateUrl: './user-servey.component.html',
  styleUrls: ['./user-servey.component.css']
})
export class UserServeyComponent implements OnInit {

  public productReview = ['Buggy', 'Fine, but there are some issues', 'Great'];
  public features = [
                {type: 'Custom responses' ,isSelected: false}, 
                {type: 'Custom integrations', isSelected: false},
                {type: 'Design', isSelected: false}, 
                {type: 'Great html code', isSelected: false}, 
                {type: 'Easy navigation', isSelected: false}
              ];
  public responsive: Array<string>= ['Very responsive', 'Usually responsive', 'Not responsive'];
  public star:Array<number> = [1,2,3,4,5]; 
  public rating: number = 0;
  public hoverState: number = 0; 
  public emailData: string;
  public updatedFeature:Array<any> = [];
  public value:number = 10;

  constructor(private email:SurveyService) {}

  ngOnInit() {
   this.email.email.subscribe(data=>{
     this.emailData = data;
   })
  }

  EditChange(value){
    if(value){
      this.email.email.next(value);
    }
  }

  onStarEnter(starId){
    this.hoverState = starId;
  }

  onStarLeave(starId){
    this.hoverState = 0;
  }

  onStarClicked(starId){
   this.rating = starId;
  }

  onChange(){
    this.updatedFeature =[];
    from(this.features).pipe(delay(500), filter(res=> res.isSelected==true
      ),map(res=> res.type)).subscribe(res=>{
     this.updatedFeature.push(res) ;
    });
  }

  onSubmit(form){
    console.log(form);
  }
}
