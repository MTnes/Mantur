import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription-setting',
  templateUrl: './subscription-setting.component.html',
  styleUrls: ['./subscription-setting.component.css']
})
export class SubscriptionSettingComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.url.value[0].path);
  }

}
