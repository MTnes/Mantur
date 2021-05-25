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
  constructor(private requestsService: RequestsService, private memberService: MemberProfileService, private memberComm: MemberCommService) { }

  ngOnInit(): void {
    this.pendingRequests = this.requestsService.calculatePendingRequests()

    if(this.memberComm.isFetched) {
      this.isProfileComplete = this.memberService.isProfileComplete
    }

    this.memberComm.fullyFetched.subscribe(
      (data: boolean) => {
        if(data) {
          this.isProfileComplete = this.memberService.isProfileComplete;
          console.log(this.isProfileComplete)
        }
      }
    );
    console.log('Visiting dashboard ' + this.isProfileComplete)
  }

  ngAfterViewInit() {

    // setTimeout(() => {
    //   this.isProfileComplete = this.memberService.isProfileComplete;
    //   console.log(this.isProfileComplete)
    // }, 1000);


  }

}
