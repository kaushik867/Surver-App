import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { UserServeyComponent } from './user-servey/user-servey.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThanksComponent } from './thanks/thanks.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../services/http-interceptor.service';
import { LoaderModule } from '../loader/loader.module';
import { ErrorModule } from '../error/error.module';



@NgModule({
  declarations: [
    UserServeyComponent,
    StarRatingComponent,
    ThanksComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LoaderModule,
    ErrorModule
  ],
  exports:[
    UserServeyComponent,
    ThanksComponent,
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ]
})
export class SurveyModule { }
