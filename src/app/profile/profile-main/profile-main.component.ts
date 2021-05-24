import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Member } from '../../shared/models/member.model';
import { MemberProfileService } from '../../shared/services/member-profile.service';

import { MemberCommService } from '../../shared/services/member-communication.service';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent implements OnInit {

  member: Member;
  ratingArray: number[] = [];
  nonRatingArray: number[] = [];

  isRefereshed = false;

  @ViewChild('websiteInput') websiteInput;
  @ViewChild('facebookInput') facebookInput;
  @ViewChild('linkedinInput') linkedinInput;
  @ViewChild('twitterInput') twitterInput;

  current_index: number = -1;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private memberService: MemberProfileService, private memberComm: MemberCommService) { }

  imageSrc: string = "";

  ngOnInit(): void {

  if (!localStorage.getItem('foo')) {
    localStorage.setItem('foo', 'no reload')
    location.reload()
  } else {
    localStorage.removeItem('foo')
  }

    // if(!this.memberComm.isFetched) {
    //   this.memberComm.fetchMember();
    // }

    this.member = this.memberService.member;

    // if(this.member.websiteLink) {
    //   this.websiteInput.nativeElement.value = this.member.websiteLink
    // } if(this.member.facebookLink) {
    //   this.facebookInput.nativeElement.value = this.member.facebookLink
    // } if(this.member.linkedinLink) {
    //   this.linkedinInput.nativeElement.value = this.member.linkedinLink
    // } if(this.member.twitterLink) {
    //   this.twitterInput.nativeElement.value = this.member.twitterLink
    // }

    for(var i = 1 ; i <= 5 ; i++) {
      if(i <= this.member.rating) {
        this.ratingArray.push(i+1);
      } else {
        this.nonRatingArray.push(i+1);
      }
    }
    this.memberService.memberUpdated.subscribe(
      (updatedMember: Member) => {
        this.member = updatedMember;
        this.ratingArray = [];
        this.nonRatingArray = [];
        for(var i = 1 ; i <= 5 ; i++) {
          if(i <= this.member.rating) {
            this.ratingArray.push(i+1);
          } else {
            this.nonRatingArray.push(i+1);
          }
        }

        if(this.member.websiteLink) {
          this.websiteInput.nativeElement.value = this.member.websiteLink
        } if(this.member.facebookLink) {
          this.facebookInput.nativeElement.value = this.member.facebookLink
        } if(this.member.linkedinLink) {
          this.linkedinInput.nativeElement.value = this.member.linkedinLink
        } if(this.member.twitterLink) {
          this.twitterInput.nativeElement.value = this.member.twitterLink
        }
      }
    );

  }

  // Functions to handle image input change
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
  }

  onEditProfile() {
    this.router.navigate(['1'], {relativeTo: this.route});
  }

  onSaveLink(type: string) {
    if(type === 'website') {
      this.memberService.updateSocial('website',this.websiteInput.nativeElement.value);
      this.memberComm.updateSocialLinks(type,this.websiteInput.nativeElement.value).subscribe();
    } else if(type === 'facebook') {
      this.memberService.updateSocial('facebook',this.facebookInput.nativeElement.value);
      this.memberComm.updateSocialLinks(type,this.facebookInput.nativeElement.value).subscribe();
    } else if(type === 'linkedin') {
      this.memberService.updateSocial('linkedin',this.linkedinInput.nativeElement.value);
      this.memberComm.updateSocialLinks(type,this.linkedinInput.nativeElement.value).subscribe();
    } else if(type === 'twitter') {
      this.memberService.updateSocial('twitter',this.twitterInput.nativeElement.value);
      this.memberComm.updateSocialLinks(type,this.twitterInput.nativeElement.value).subscribe();
    }
  }

  onSaveImage() {
    if(this.imageSrc !== "" ) {
      this.member.picture = this.imageSrc;
      this.imageSrc = "";
    }
    this.memberComm.updateProfilePic(this.member.picture).subscribe();
  }

  onAddFeatured() {
    if(this.imageSrc) {
      this.memberService.addFeatured(this.imageSrc);
      this.imageSrc = "";
    }
    this.memberComm.updateFeatured(this.memberService.getMember().featured).subscribe();
  }

  onEditFeaturedImage(index: number) {
    this.current_index = index;
    this.imageSrc = this.member.featured[index];
  }

  onDeleteFeatured(index: number) {
    this.memberService.deleteFeatured(index);
    this.memberComm.updateFeatured(this.memberService.getMember().featured).subscribe();
  }

  onUpdateFeatured() {
    if(this.imageSrc != this.member.featured[this.current_index]) {
      this.memberService.editFeatured(this.current_index, this.imageSrc);
      this.imageSrc = "";
      this.memberComm.updateFeatured(this.memberService.getMember().featured).subscribe();
    }
  }

  onOpenModal() {
    this.imageSrc = "";
  }

}
