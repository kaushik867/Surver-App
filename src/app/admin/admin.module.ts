import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { LoaderModule } from '../loader/loader.module';
import { ErrorModule } from '../error/error.module';



@NgModule({
  declarations: [
    LoginComponent, PanelComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    LoaderModule,
    ErrorModule
  ]
})
export class AdminModule { }
