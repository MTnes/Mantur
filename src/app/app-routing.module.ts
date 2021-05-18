import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: DashboardComponent },

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

  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
