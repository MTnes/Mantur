import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Member } from '../../shared/models/member.model';
import { MemberProfileService } from '../../shared/services/member-profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberCommService } from '../../shared/services/member-communication.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  updateProfileForm: FormGroup;
  member: Member;
  imageSrc = "";

  about_content = "";
  services_content = "";

  formData: { firstName: string,
              lastName: string,
              profession: string,
              location: string,
              bannerImage: string,
              about: string,
              services: string,
              fees: number}


  constructor(private memberService: MemberProfileService,
              private router: Router,
              private route: ActivatedRoute,
              private memberComm: MemberCommService) { }

  ngOnInit(): void {

    // if(!this.memberComm.isFetched) {
    //   this.memberComm.fetchMember();
    // }

    this.member = this.memberService.getMember();

    this.updateProfileForm = new FormGroup({
      'first_name': new FormControl(null, Validators.required),
      'last_name': new FormControl(),
      'profession': new FormControl(null, Validators.required),
      'address': new FormControl(),
      'banner_image': new FormControl(),
      'question_price': new FormControl(null, Validators.required),
      'about_me': new FormControl(),
      'services_offered': new FormControl()
    });

    this.updateProfileForm.patchValue({
      'first_name': this.member.firstName,
      'last_name': this.member.lastName,
      'profession': this.member.profession,
      'address': this.member.location,
      'question_price': this.member.fees,
    });

    this.imageSrc = this.member.bannerImage;
    this.about_content = this.member.about;
    this.services_content = this.member.services
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

  onSubmit() {
    this.formData = {
      'firstName': this.updateProfileForm.value.first_name,
      'lastName': this.updateProfileForm.value.last_name,
      'profession': this.updateProfileForm.value.profession,
      'location': this.updateProfileForm.value.address,
      'bannerImage': this.imageSrc,
      'about': this.updateProfileForm.value.about_me,
      'services': this.updateProfileForm.value.services_offered,
      'fees': this.updateProfileForm.value.question_price
    };

    if(this.formData.about === null) {
      this.formData.about = this.about_content;
    }

    if(this.formData.services === null) {
      this.formData.services = this.services_content
    }

    this.memberService.updateProfile(this.formData);
    console.log(this.memberService.getMember())
    this.memberComm.updateProfile(this.formData).subscribe();

    setTimeout(
      () => {
        this.router.navigate(['/profile'])
      }
      ,1000);
  }

}
