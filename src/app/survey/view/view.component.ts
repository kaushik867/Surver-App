import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Survey } from 'src/app/modals/survey.modal';
import { SpinnerLoadService } from 'src/app/services/spinner-load.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  data:Survey;
  feature:Array<string>;
  constructor(private _http: SurveyService, public loader: SpinnerLoadService) { }
  public star=[1,2,3,4,5];

  ngOnInit(): void {
    this._http.Id.pipe(
      mergeMap(id=>this._http.getdata(id))
      ).subscribe(data=>{
        this.data=data.response.data[0];
        this.feature = data.response.data[0].portalData.featureDetails;
      })
  }

}
