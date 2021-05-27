import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RequestsService } from '../shared/services/requests.service';
import { MemberProfileService } from '../shared/services/member-profile.service';
import { MemberCommService } from '../shared/services/member-communication.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  pendingRequests: number;
  isProfileComplete = false;
  isLinksUpdated = false;
  isFeesUpdated = false;

  constructor(private requestsService: RequestsService, private memberService: MemberProfileService, private memberComm: MemberCommService) { }

  ngOnInit(): void {
    this.pendingRequests = this.requestsService.calculatePendingRequests()

    if(this.memberComm.isFetched) {
      this.isProfileComplete = this.memberService.isProfileComplete;
      this.isLinksUpdated = this.memberService.isLinksUpdated;
      this.isFeesUpdated = this.memberService.isFeesUpdated;
      console.log('Atleast one link is present : ' + this.isLinksUpdated)
    }

    this.memberComm.fullyFetched.subscribe(
      (data: boolean) => {
        if(data) {
          this.isProfileComplete = this.memberService.isProfileComplete;
          console.log('Profile is complete : ' + this.isProfileComplete)
          this.isLinksUpdated = this.memberService.isLinksUpdated;
          console.log('Atleast one link is present : ' + this.isLinksUpdated)
          this.isFeesUpdated = this.memberService.isFeesUpdated;
          console.log('Fees is Updated : ' + this.isFeesUpdated)
        }
      }
    );

  }

  ngAfterViewInit() {

    // setTimeout(() => {
    //   this.isProfileComplete = this.memberService.isProfileComplete;
    //   console.log(this.isProfileComplete)
    // }, 1000);


  }

}
