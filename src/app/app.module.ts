import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxSummernoteModule } from 'ngx-summernote';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Common Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

// Navbar Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { EarningsComponent } from './earnings/earnings.component';
import { EarningsMainComponent } from './earnings/earnings-main/earnings-main.component';
import { ViewEarningComponent } from './earnings/view-earning/view-earning.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestsMainComponent } from './requests/requests-main/requests-main.component';
import { ViewRequestComponent } from './requests/view-request/view-request.component';
import { PaymentSettingComponent } from './payment-setting/payment-setting.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { SubscriptionSettingComponent } from './subscription-setting/subscription-setting.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileMainComponent } from './profile/profile-main/profile-main.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { KonsultPaypalComponent } from './konsult-paypal/konsult-paypal.component';
import { KonsultStripeComponent } from './konsult-stripe/konsult-stripe.component';

// User Components
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';

// Services
import { MemberProfileService } from './shared/services/member-profile.service';
import { MemberCommService } from './shared/services/member-communication.service';
import { RequestsService } from './shared/services/requests.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    EarningsComponent,
    EarningsMainComponent,
    ViewEarningComponent,
    RequestsComponent,
    RequestsMainComponent,
    ViewRequestComponent,
    PaymentSettingComponent,
    KonsultPaypalComponent,
    KonsultStripeComponent,
    NotificationSettingComponent,
    ProfileComponent,
    ProfileMainComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    LoginComponent,
    SubscriptionSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSummernoteModule
  ],
  providers: [MemberProfileService, MemberCommService, RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
