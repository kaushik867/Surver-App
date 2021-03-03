import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [
    SpinnerLoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports:[
    SpinnerLoaderComponent
  ]
})
export class LoaderModule { }
