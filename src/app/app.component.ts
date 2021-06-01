import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MemberCommService } from './shared/services/member-communication.service';
import { MemberProfileService } from './shared/services/member-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'konsult-member';

  constructor(private route: ActivatedRoute, private router: Router, private memberComm: MemberCommService, private memberService: MemberProfileService) { }

  ngOnInit() {
        
  }

}
