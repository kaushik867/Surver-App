import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { UserServeyComponent } from './user-servey/user-servey.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserServeyComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserServeyComponent
  ]
})
export class SurveyModule { }
