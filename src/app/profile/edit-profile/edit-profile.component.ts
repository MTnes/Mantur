import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Member } from '../../shared/models/member.model';
import { MemberProfileService } from '../../shared/services/member-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  updateProfileForm: FormGroup;

  constructor(private memberService: MemberProfileService) { }

  ngOnInit(): void {
    this.updateProfileForm = new FormGroup({
      'first_name': new FormControl(),
      'last_name': new FormControl(),
      'profession': new FormControl(),
      'address': new FormControl(),
      'profile_pic': new FormControl(),
      'question_price': new FormControl(),
      'about_me': new FormControl(),
      'services_offered': new FormControl()
    });
  }

}
