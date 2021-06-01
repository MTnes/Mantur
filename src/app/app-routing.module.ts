import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

import { BlogSingleComponent } from './Components/blog-single/blog-single.component';
import { BlogComponent } from './Components/blog/blog.component';
import { IndexComponent } from './Components/index/index.component';
import { KonsultProfileComponent } from './Components/konsult-profile/konsult-profile.component';
import { LoginComponent } from './Components/login/login.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { RecordVideoComponent } from './Components/record-video/record-video.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component : IndexComponent },

  { path: 'dashboard', component: DashboardComponent },

  { path: 'requests', component: RequestsComponent, children: [
    { path: '', component: RequestsMainComponent },
    { path: ':id', component: ViewRequestComponent }
  ] },

  { path: 'earnings', component: EarningsComponent, children: [
    { path: '', component: EarningsMainComponent },
    { path: ':id', component: ViewEarningComponent }
  ] },

  { path: 'payment-setting', component: PaymentSettingComponent },
  { path: 'konsult-paypal', component: KonsultPaypalComponent },
  { path: 'konsult-stripe', component: KonsultStripeComponent },

  { path: 'subscription-setting', component: SubscriptionSettingComponent },

  { path: 'notification-setting', component: NotificationSettingComponent },

  { path: 'profile', component: ProfileComponent, children: [
    { path: '', component: ProfileMainComponent },
    { path: ':id', component: EditProfileComponent }
  ] },

  { path: 'change-password', component: ChangePasswordComponent },

  { path : "pricing", component : PricingComponent },
  { path : "blog", component : BlogComponent },
  { path : "login", component : LoginComponent },
  { path : "blog-single", component : BlogSingleComponent },
  { path : "record-video", component : RecordVideoComponent },
  { path : "register", component : RegisterComponent },
  { path : "konsult-profile", component : KonsultProfileComponent },
  { path : "resetpassword", component : ResetpasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
