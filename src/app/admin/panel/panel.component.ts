import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, shareReplay} from 'rxjs/operators';
import { Survey } from 'src/app/modals/survey.modal';
import { SpinnerLoadService } from 'src/app/services/spinner-load.service';
import { SurveyService } from 'src/app/services/survey.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  displayedColumns: string[] = ['Name','Email','Age','Review','Response', 'Feature','Rating'];
  dataSource: MatTableDataSource<Survey> = new MatTableDataSource<Survey>();
  star1:number = 0;
  star2:number = 0;
  star3:number = 0;
  star4:number = 0;
  star5:number = 0;
  totalRating:number = 0;
  allResponse:Observable<any>;
  error:boolean =false;

  constructor(private _http: SurveyService, public loader: SpinnerLoadService) { }

  ngOnInit(): void {
   this.allResponse =  this._http.getAllData().pipe(
     shareReplay()
   );

   this.allResponse.subscribe(data=>{
      this.dataSource.data = data['response']['data'];
      this.totalRating = data['response']['data'].length;
    },
    error=>{
      this.error=true;
    })

    this.allResponse.pipe(
      map(res=> res.response.data)
    ).subscribe(data=>{
      data.filter(data=>{
        if(data.fieldData.Rating_xn==1){
          this.star1++;
        }
      })
    })

    this.allResponse.pipe(
      map(res=> res.response.data)
    ).subscribe(data=>{
      data.filter(data=>{
        if(data.fieldData.Rating_xn==2){
          this.star2++;
        }
      })
    })

    this.allResponse.pipe(
      map(res=> res.response.data)
    ).subscribe(data=>{
      data.filter(data=>{
        if(data.fieldData.Rating_xn==3){
          this.star3++;
        }
      })
    })

    this.allResponse.pipe(
      map(res=> res.response.data)
    ).subscribe(data=>{
      data.filter(data=>{
        if(data.fieldData.Rating_xn==4){
          this.star4++;
        }
      })
    })

    this.allResponse.pipe(
      map(res=> res.response.data)
    ).subscribe(data=>{
      data.filter(data=>{
        if(data.fieldData.Rating_xn==5){
          this.star5++;
        }
      })
    })
  }

}
