import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { UserServeyComponent } from './user-servey/user-servey.component';



@NgModule({
  declarations: [
    UserServeyComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports:[
    UserServeyComponent
  ]
})
export class SurveyModule { }
