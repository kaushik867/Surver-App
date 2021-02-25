import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-user-servey',
  templateUrl: './user-servey.component.html',
  styleUrls: ['./user-servey.component.css']
})
export class UserServeyComponent implements OnInit {

  get emailVal(){
    return this.surveyForm.get('email');
  }
  get nameVal(){
    return this.surveyForm.get('name');
  }
  get reviewVal(){
    return this.surveyForm.get('review');
  }
  get responseVal(){
    return this.surveyForm.get('responsiveness');
  }
  get ageVal(){
    return this.surveyForm.get('age');
  }
  get ratingVal(){
    return this.surveyForm.get('rating');
  }

  public surveyForm;
  public productReview = ['Buggy', 'Fine, but there are some issues', 'Great'];
  public selectedFeaturesValue=[];
  public features = ['Custom responses','Custom integrations', 'Design', 'Great html code', 'Easy navigation'];
  public responsive: Array<string>= ['Very responsive', 'Usually responsive', 'Not responsive'];
  public star:Array<number> = [1,2,3,4,5]; 
  public rating: number = 0;
  public hoverState: number = 0;
  public featureSelected:boolean = false;
  public disabled="true";
  public emailData:string;

  constructor(private email:SurveyService, private _fb: FormBuilder, private route: Router) {}

  ngOnInit() {
    this.surveyForm = this._fb.group({
      email: [{value: '', disabled: this.disabled}, [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+[,\.'\-]?[a-zA-Z ]+$/)]],
      review: ['', Validators.required],
      responsiveness: ['', Validators.required],
      feature: this.addFeatureControls(),
      age: ['', Validators.required],
      rating:['', Validators.required]
    });

   this.email.email.subscribe(data=>{
     this.surveyForm.controls.email.setValue(data);
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
    });
   if(this.selectedFeaturesValue.length>=3){
    this.featureSelected = true;
   }
   else{
     this.featureSelected = false;
   }
  }

  editEmail(){
    this.surveyForm.controls['email'].enable();
  }

  submitHandler(){
    if(this.surveyForm.valid && this.featureSelected){
      this.surveyForm.value['email']= this.emailData;
      this.surveyForm.value.feature = this.selectedFeaturesValue;
      this.email.formSubmission.next(true);
      this.route.navigate(['/thanks']);
    }
  }

  changeEmail(val){
    this.email.email.next(val.target.value);
  }
}
