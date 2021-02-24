import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { UserServeyComponent } from './survey/user-servey/user-servey.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'survey' , component: UserServeyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
