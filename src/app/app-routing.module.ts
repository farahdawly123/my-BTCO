import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PayformComponent } from './payform/payform.component';
import { PayFormTwComponent } from './pay-form-tw/pay-form-tw.component';
import { PayFormThreeComponent } from './pay-form-three/pay-form-three.component';
import { RetrivalOComponent } from './retrival-o/retrival-o.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { IlliteratesComponent } from './illiterates/illiterates.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { TargetComponent } from './target/target.component';
import { MissionComponent } from './mission/mission.component';
import { HelpUsComponent } from './help-us/help-us.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
   {path:'home', component:HomeComponent},
  {path:'Register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'payform',canActivate:[AuthGuard],component:PayformComponent},
  {path:'payformtw',component: PayFormTwComponent},
  {path:'payformthree',component:PayFormThreeComponent},
  {path:'retrivalO',component:RetrivalOComponent},
  {path:'dashboard',component:DashboardComponent ,    children: [
    { path: '', redirectTo: 'illiterates', pathMatch: 'full' },
    { path: 'illiterates', component: IlliteratesComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'users', component: UsersComponent }
  ]},
  {path:'loginAdmin',component:LoginAdminComponent},
  {path:'registerAdmin',component:RegisterAdminComponent},
  {path:'contact',canActivate:[AuthGuard] ,component:ContactComponent},
  {path:'target',component:TargetComponent},
  {path:'mission',component:MissionComponent},
  {path:'forgetPass',component:ForgetPassComponent},
  {path:'help',canActivate:[AuthGuard] ,component:HelpUsComponent},
  {path:'**',component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
