import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-user-servey',
  templateUrl: './user-servey.component.html',
  styleUrls: ['./user-servey.component.css']
})
export class UserServeyComponent implements OnInit {

  public surveyForm;
  public productReview = ['Buggy', 'Fine, but there are some issues', 'Great'];
  public selectedFeaturesValue=[];
  public features = ['Custom responses','Custom integrations', 'Design', 'Great html code', 'Easy navigation'];
  public responsive: Array<string>= ['Very responsive', 'Usually responsive', 'Not responsive'];
  public star:Array<number> = [1,2,3,4,5]; 
  public rating: number = 0;
  public hoverState: number = 0; 
  public emailData: string;
  public updatedFeature:Array<any> = [];
  public value:number = 10;

  constructor(private email:SurveyService, private _fb: FormBuilder) {}

  ngOnInit() {
    this.surveyForm = this._fb.group({
      email: [''],
      name: [''],
      review: [''],
      responsiveness: [''],
      feature: this.addFeatureControls(),
      age: [''],
      rating:['']
    });

   this.email.email.subscribe(data=>{
     this.emailData = data;
     this.surveyForm.controls.email.setValue(data);
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
   this.surveyForm.controls.rating.setValue(this.rating)
  }

  addFeatureControls(){
    const featureControls = this.features.map(element=>{
      return this._fb.control(false);
    })
    return this._fb.array(featureControls);
  }

  get FeaturesArray(){
    return this.surveyForm.get('feature')
  }

  getSelectedFeaturesValues(){
    this.selectedFeaturesValue = [];
    this.FeaturesArray.controls.forEach((control,i)=>{
      if(control.value){
        this.selectedFeaturesValue.push(this.features[i]);
      }
    })
  }

  submitHandler(){
    this.surveyForm.value.feature = this.selectedFeaturesValue;
    console.log(typeof this.surveyForm);
  }
}
