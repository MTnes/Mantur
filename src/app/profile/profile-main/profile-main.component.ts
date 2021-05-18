import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Member } from '../../shared/models/member.model';
import { MemberProfileService } from '../../shared/services/member-profile.service';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent implements OnInit {

  member: Member;
  ratingArray: number[] = [];
  nonRatingArray: number[] = [];

  @ViewChild('websiteInput') websiteInput;
  @ViewChild('facebookInput') facebookInput;
  @ViewChild('linkedinInput') linkedinInput;
  @ViewChild('twitterInput') twitterInput;

  current_index: number = -1;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private memberService: MemberProfileService) { }

  imageSrc: string = "";
  featuredUploadSrc: string = "";
  featuredUpdateSrc: string = "";

  ngOnInit(): void {
    this.member = this.memberService.member;
    if(this.member.socials) {
      if(this.member.socials.website) {
        this.websiteInput.nativeElement.value = this.member.socials.website
      } if(this.member.socials.facebook) {
        this.facebookInput.nativeElement.value = this.member.socials.facebook
      } if(this.member.socials.linkedin) {
        this.linkedinInput.nativeElement.value = this.member.socials.linkedin
      } if(this.member.socials.twitter) {
        this.twitterInput.nativeElement.value = this.member.socials.twitter
      }
    }

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
        if(this.member.socials) {
          if(this.member.socials.website) {
            this.websiteInput.nativeElement.value = this.member.socials.website
          } if(this.member.socials.facebook) {
            this.facebookInput.nativeElement.value = this.member.socials.facebook
          } if(this.member.socials.linkedin) {
            this.linkedinInput.nativeElement.value = this.member.socials.linkedin
          } if(this.member.socials.twitter) {
            this.twitterInput.nativeElement.value = this.member.socials.twitter
          }
        }
      }
    );
    console.log(this.member)

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
    } else if(type === 'facebook') {
      this.memberService.updateSocial('facebook',this.facebookInput.nativeElement.value);
    } else if(type === 'linkedin') {
      this.memberService.updateSocial('linkedin',this.linkedinInput.nativeElement.value);
    } else if(type === 'twitter') {
      this.memberService.updateSocial('twitter',this.twitterInput.nativeElement.value);
    }
  }

  onSaveImage() {
    if(this.imageSrc !== "" ) {
      this.member.picture = this.imageSrc;
      this.imageSrc = "";
    }
  }

  onAddFeatured() {
    if(this.imageSrc) {
      this.memberService.addFeatured({ 'type': 'image', 'data': this.imageSrc });
    }
  }

  onEditFeaturedImage(index: number) {
    this.current_index = index;
    this.imageSrc = this.member.featured[index].data;
  }

  onDeleteFeatured(index: number) {
    this.memberService.deleteFeatured(index);
  }

  onUpdateFeatured() {
    if(this.imageSrc != this.member.featured[this.current_index].data) {
      this.memberService.editFeatured(this.current_index, this.imageSrc);
    }
  }

  onOpenModal() {
    this.imageSrc = "";
  }

}
