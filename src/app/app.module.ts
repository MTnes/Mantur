import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxSummernoteModule } from 'ngx-summernote';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Common Components
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

// Navbar Components
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EarningsComponent } from './Components/earnings/earnings.component';
import { EarningsMainComponent } from './Components/earnings/earnings-main/earnings-main.component';
import { ViewEarningComponent } from './Components/earnings/view-earning/view-earning.component';
import { RequestsComponent } from './Components/requests/requests.component';
import { RequestsMainComponent } from './Components/requests/requests-main/requests-main.component';
import { ViewRequestComponent } from './Components/requests/view-request/view-request.component';
import { PaymentSettingComponent } from './Components/payment-setting/payment-setting.component';
import { NotificationSettingComponent } from './Components/notification-setting/notification-setting.component';
import { SubscriptionSettingComponent } from './Components/subscription-setting/subscription-setting.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ProfileMainComponent } from './Components/profile/profile-main/profile-main.component';
import { EditProfileComponent } from './Components/profile/edit-profile/edit-profile.component';
import { KonsultPaypalComponent } from './Components/konsult-paypal/konsult-paypal.component';
import { KonsultStripeComponent } from './Components/konsult-stripe/konsult-stripe.component';

// User Components
import { ChangePasswordComponent } from './Components/change-password/change-password.component';

// Services
import { MemberProfileService } from './shared/services/member-profile.service';
import { MemberCommService } from './shared/services/member-communication.service';
import { RequestsService } from './shared/services/requests.service';
import { PaymentAccountsService } from './shared/services/payment-accounts.service';

// Main Pages Components (From Jay's Code)
import { IndexComponent } from './Components/index/index.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { BlogComponent } from './Components/blog/blog.component';
import { LoginComponent } from './Components/login/login.component';
import { BlogSingleComponent } from './Components/blog-single/blog-single.component';
import { RecordVideoComponent } from './Components/record-video/record-video.component';
import { RegisterComponent } from './Components/register/register.component';
import { KonsultProfileComponent } from './Components/konsult-profile/konsult-profile.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { RecordThankuComponent } from './Components/record-thanku/record-thanku.component';


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
    SubscriptionSettingComponent,
    IndexComponent,
    PricingComponent,
    BlogComponent,
    LoginComponent,
    BlogSingleComponent,
    RecordVideoComponent,
    RegisterComponent,
    KonsultProfileComponent,
    ResetpasswordComponent,
    RecordThankuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSummernoteModule,
    NgxPaginationModule
  ],
  providers: [MemberProfileService, MemberCommService, RequestsService, PaymentAccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
