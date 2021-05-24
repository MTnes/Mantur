import { Component, OnInit } from '@angular/core';
import { MemberProfileService } from '../shared/services/member-profile.service';
import { Member } from '../shared/models/member.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;
  profilePic: string;
  
  constructor(private memberService: MemberProfileService) { }

  ngOnInit(): void {
    this.profilePic = this.memberService.member.picture;
    this.userName = this.memberService.member.firstName;
    this.memberService.memberUpdated.subscribe(
      (data: Member) => {
        this.userName = data.firstName;
        this.profilePic = data.picture;
      }
    );
  }

}
