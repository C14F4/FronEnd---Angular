import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { GuardGuard } from './service/guard.guard';


const routes: Routes = [
	{path:'home',component:HomeComponent, canActivate:[GuardGuard]},
	{path:'login',component:LoginComponent},
	{path:'',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
