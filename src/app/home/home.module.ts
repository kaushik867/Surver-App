import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports:[
    HomeComponent,
  ]
})
export class HomeModule { }
