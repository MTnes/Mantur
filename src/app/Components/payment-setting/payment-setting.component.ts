import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MemberCommService } from '../../shared/services/member-communication.service';
import { MemberProfileService } from '../../shared/services/member-profile.service';

import { PaymentAccountsService } from '../../shared/services/payment-accounts.service';

@Component({
  selector: 'app-payment-setting',
  templateUrl: './payment-setting.component.html',
  styleUrls: ['./payment-setting.component.css']
})
export class PaymentSettingComponent implements OnInit {

  razorPayForm: FormGroup;
  settingsForm: FormGroup;

  settings: { country: string, currency: string } = { 'country' : '', 'currency': '' };

  constructor(private memberComm: MemberCommService, private memberService: MemberProfileService, private router: Router, private paymentService: PaymentAccountsService) { }

  data = {"merchant_id": "CG5RZJV4NR5P4",
          "tracking_id": "1537989077589",
          "products": [{"name": "PPCP_CUSTOM"}],
          "payments_receivable": true,
          "primary_email_confirmed": true,
          "products.vetting status": "SUBSCRIBED",}

  ngOnInit(): void {

    this.settings = this.memberService.getMember().settings;
    console.log(this.settings)
    this.razorPayForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'businessType': new FormControl('Individual'),
      'accountDetails': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'ifsc': new FormControl(null, Validators.required),
        'accountNumber': new FormControl(null, Validators.required),
        'accountType': new FormControl('Savings')
      })
    });

    this.settingsForm = new FormGroup({
      'country': new FormControl(this.settings.country),
      'currency': new FormControl(this.settings.currency)
    });

  }

  get email() { return this.razorPayForm.get('email'); }
  get fullName() { return this.razorPayForm.get('fullName'); }
  get name() { return this.razorPayForm.get('accountDetails.name'); }
  get ifsc() { return this.razorPayForm.get('accountDetails.ifsc'); }
  get accountNumber() { return this.razorPayForm.get('accountDetails.accountNumber'); }

  onSubmit() {
    console.log(this.razorPayForm);
  }

  onSettingsSubmit() {
    console.log(this.settingsForm)
    const curr = this.settingsForm.value.currency
    const country = this.settingsForm.value.country
    this.memberService.updateCurrency(curr);
    this.memberComm.updateSettings(country,curr).subscribe(
      (response) => {
        alert('Settings Updated')
      }
    );
  }

  onClickPaypal() {
    this.router.navigate(['konsult-paypal']);
  }

}
