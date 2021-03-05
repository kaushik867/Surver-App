
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { exhaustMap, delay, tap } from 'rxjs/operators';
import { SpinnerLoadService } from 'src/app/services/spinner-load.service';
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
  public features: Array<string> = [];
  public responsive: Array<string>= ['Very responsive', 'Usually responsive', 'Not responsive'];
  public star:Array<number> = [1,2,3,4,5]; 
  public rating: number = 0;
  public hoverState: number = 0;
  public featureSelected:boolean = false;
  public disabled="true";
  public emailData:string;
  @ViewChild('btn') submit :ElementRef;
  private formData;
  public btnClicked: boolean = false;
  public Question:Array<string>;

  constructor(public _http:SurveyService, private _fb: FormBuilder, private route: Router, public loader: SpinnerLoadService) {
    this.surveyForm = this._fb.group({});
  }

  ngOnInit() {
   
   
   this._http.getToken().pipe(
      tap((token)=> this._http.token.next(token['response']['token'])),
      exhaustMap(()=> this._http.getQuestions())
      ).subscribe(data=>{
        this.Question = data['response']['data'];
          this.Question.forEach(element => {
            if(element['fieldData']['ControlType_xt'] == 'checkbox'){
              if(element['fieldData']['Id_xt'] == 'feature'){
                this.surveyForm.addControl(element['fieldData'].Id_xt,this.addFeatureControls(element));
              }
            }
            else{
              if(element['fieldData']['Id_xt'] == 'name'){
                this.surveyForm.addControl(element['fieldData'].Id_xt, this._fb.control('',[Validators.required, Validators.pattern(/^[a-zA-Z ]+[,\.'\-]?[a-zA-Z ]+$/)]));
              }
              else if(element['fieldData']['Id_xt'] == 'email'){
                this.surveyForm.addControl(element['fieldData'].Id_xt, this._fb.control('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]));
              }
              else{
                this.surveyForm.addControl(element['fieldData'].Id_xt, this._fb.control('',Validators.required));
              }
            }
            
          });
      })  
   
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

  addFeatureControls(arr){
    const featureControls = arr['portalData']['surveyOptions'].map(element=>{
      this.features.push(element['surveyOptions::Options_xt']);
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
        this.selectedFeaturesValue.push({'featureDetails::Feature_xt':this.features[i]});
      }
    });

   if(this.selectedFeaturesValue.length>=3){
    this.featureSelected = true;
   }
   else{
     this.featureSelected = false;
   }
  }

  submitHandler(){
    if(this.surveyForm.valid && this.featureSelected){
      this.btnClicked = true;
      this.formData = {
          fieldData:{
            Name_xt : this.surveyForm.value['name'],
            Email_xt: this.surveyForm.value['email'],
            Age_xn: this.surveyForm.value['age'],
            response_xt: this.surveyForm.value['responsive'],
            Review_xt: this.surveyForm.value['review'],
            Rating_xn: this.surveyForm.value['rating']
          },
        portalData:{
          featureDetails:this.selectedFeaturesValue
        }
      }
      
      this._http.getToken().pipe(
        tap((token)=> this._http.token.next(token['response']['token'])),
        exhaustMap(()=> this._http.postSurvey(this.formData))
        ).subscribe(data=>{
          if(data.messages[0].code == 0 && data.messages[0].message == 'OK'){
            this.surveyForm.reset();
            this._http.formSubmission.next(true);
            this._http.Id.next(data['response']['recordId']);
            this.route.navigate(['/thanks']);
          }
        })
    }
  }

  
}
