import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { HeaderComponent } from './header/header.component';
import { SurveyModule } from './survey/survey.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    SurveyModule,
    HttpClientModule,
    AdminModule
  ],
  exports:[
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
