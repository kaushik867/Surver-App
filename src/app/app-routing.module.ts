import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { PanelComponent } from './admin/panel/panel.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';
import { SubmissionGuard } from './guard/submission.guard';
import { HomeComponent } from './home/home/home.component';
import { ThanksComponent } from './survey/thanks/thanks.component';
import { UserServeyComponent } from './survey/user-servey/user-servey.component';
import { ViewComponent } from './survey/view/view.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'survey' , component: UserServeyComponent, canActivate:[AuthGuard]},
  {path: 'thanks', component: ThanksComponent, canActivate:[SubmissionGuard]},
  {path: 'view', component:ViewComponent, canActivate:[SubmissionGuard]},
  {path: 'admin', component:LoginComponent},
  {path: 'admin-panel', component: PanelComponent, canActivate: [LoginGuard]},
  {path: '**' , redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
