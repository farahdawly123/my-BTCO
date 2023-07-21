import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxWrapperTinySliderModule } from 'ngx-wrapper-tiny-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgFor } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { PayformComponent } from './payform/payform.component';
import { PayFormTwComponent } from './pay-form-tw/pay-form-tw.component';
import { PayFormThreeComponent } from './pay-form-three/pay-form-three.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { RetrivalOComponent } from './retrival-o/retrival-o.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { IlliteratesComponent } from './illiterates/illiterates.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { TargetComponent } from './target/target.component';
import { MissionComponent } from './mission/mission.component';
import { FooterComponent } from './footer/footer.component';
import { HelpUsComponent } from './help-us/help-us.component';
// import { CreditCardDirectivesModule } from 'ngx-credit-cards';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    ServicesComponent,
    PayformComponent,
    PayFormTwComponent,
    PayFormThreeComponent,
    RetrivalOComponent,
    DashboardComponentComponent,
    DashboardComponent,
    ContactComponent,
    NotfoundComponent,
    IlliteratesComponent,
    OrdersComponent,
    UsersComponent,
    LoginAdminComponent,
    RegisterAdminComponent,
    TargetComponent,
    MissionComponent,
    FooterComponent,
    HelpUsComponent,
    ForgetPassComponent,


  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    NgxWrapperTinySliderModule,
    HttpClientModule,
    SelectDropDownModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
