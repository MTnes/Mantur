import { Component, OnInit } from '@angular/core';
import { MemberCommService } from '../../shared/services/member-communication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private memberComm: MemberCommService) { }

  ngOnInit(): void {
    // window.location.reload();
  }

}
