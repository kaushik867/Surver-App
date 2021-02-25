import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { UserServeyComponent } from './user-servey/user-servey.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThanksComponent } from './thanks/thanks.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserServeyComponent,
    StarRatingComponent,
    ThanksComponent,
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    UserServeyComponent,
    ThanksComponent
  ]
})
export class SurveyModule { }
