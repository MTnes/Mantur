import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MemberProfileService {

  member = new Member;
  memberUpdated = new Subject<Member>();
  isProfileComplete: boolean;
  isLinksUpdated: boolean;
  isFeesUpdated: boolean;

  constructor() {
    // this.member.firstName = 'Sean';
    // this.member.lastName = 'Williams';
    // this.member.profession = 'Public Speaker, Author & Career Coach';
    // this.member.location = 'Massachusetts, United States';
    // this.member.fees = 49;
    // this.member.about = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    // this.member.services = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
    // this.member.publicURL = 'www.konsult-member.com/sean-williams';
    // this.member.bannerImage = 'assets/images/banner-big.jpg';
    // this.member.picture = 'assets/images/avatar-2.jpg';
    // this.member.rating = 2;
    // this.member.reviewsCount = 0;
    // this.member.featured.push('assets/images/img-4.jpg');
    // this.member.featured.push('assets/images/img-4.jpg');
    // this.member.featured.push('assets/images/img-4.jpg');
  }

  setMember(data: Member) {
    this.member = data;
    this.memberUpdated.next(this.member);
  }

  getMember() {
    return this.member;
  }

  updateProfile(data: { firstName: string,
                        lastName: string,
                        profession: string,
                        location: string,
                        bannerImage: string,
                        about: string,
                        services: string,
                        fees: number}) {

      this.member.firstName = data.firstName;
      this.member.lastName = data.lastName;
      this.member.profession = data.profession;
      this.member.location = data.location;
      this.member.bannerImage = data.bannerImage;
      this.member.about = data.about;
      this.member.services = data.services;
      this.member.fees = data.fees

      if(this.member.fees) {
        this.isFeesUpdated = true;
      } else this.isFeesUpdated = false;

      if(!this.member.firstName || !this.member.lastName || !this.member.picture) {
        this.isProfileComplete = false;
      }

      this.memberUpdated.next(this.member);
  }

  updateFees(data: number) {
    this.member.fees = data;
    this.memberUpdated.next(this.member);
  }

  updateCurrency(data: string) {
    this.member.settings.currency = data;
    this.memberUpdated.next(this.member);
  }

  updateProfilePic(url: string) {
    this.member.picture = url;
    if(url == null) {
      this.isProfileComplete = false;
    }
    this.memberUpdated.next(this.member);
  }

  checkLinks() {
    if(this.member.websiteLink!='' || this.member.facebookLink!='' || this.member.twitterLink!='' || this.member.linkedinLink!='') {
      this.isLinksUpdated = true;
      return true;
    } else {
      this.isLinksUpdated = false;
      return false;
    }
  }

  updateSocial(type: string, url: string) {

    if(type === 'website') {
      this.member.websiteLink = url;
    } else if(type === 'facebook') {
      this.member.facebookLink = url;
    } else if(type === 'linkedin') {
      this.member.linkedinLink = url;
    } else if(type === 'twitter') {
      this.member.twitterLink = url;
    }

    this.isLinksUpdated = this.checkLinks();
    this.memberUpdated.next(this.member);
  }

  deleteFeatured(id: number) {
    this.member.featured.splice(id,1);
    this.memberUpdated.next(this.member);
  }

  addFeatured(feature: string) {
    console.log(feature)
    this.member.featured.push(feature);
    this.memberUpdated.next(this.member);
  }

  editFeatured(id: number, data: string) {
    this.member.featured[id] = data;
    this.memberUpdated.next(this.member);
  }

}
