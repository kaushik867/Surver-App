import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { SubmissionGuard } from './guard/submission.guard';
import { HomeComponent } from './home/home/home.component';
import { ThanksComponent } from './survey/thanks/thanks.component';
import { UserServeyComponent } from './survey/user-servey/user-servey.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'survey' , component: UserServeyComponent, canActivate:[AuthGuard]},
  {path: 'thanks', component: ThanksComponent, canActivate: [SubmissionGuard]},
  {path: '**' , redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
