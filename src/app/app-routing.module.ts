import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetComponent } from './auth/reset/reset.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
    {path:'',redirectTo:'signin',pathMatch:'full'},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'reset',component:ResetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
