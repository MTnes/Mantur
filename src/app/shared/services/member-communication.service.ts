import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from '../models/member.model';
import 'rxjs/Rx'
import { MemberProfileService } from './member-profile.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MemberCommService {

  baseUrl = "https://mantur-server.herokuapp.com"
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTRlMTdlOWEzYWM0MDAxNTUzNzNiMSIsImlhdCI6MTYyMTQxODM2NiwiZXhwIjoxNjMwMDU4MzY2fQ.4pdS8SvO7RZCww59_to-zT-fWjlUJ0zRZ7wAPv8XFkg";
  isFetched = false;
  fullyFetched = new Subject<boolean>();

  constructor(private http: HttpClient, private memberService: MemberProfileService) { }

  // postPublicURL() {
  //   let header = new HttpHeaders();
  //   header = header.set('Authorization', "Bearer " + this.token);
  //   return this.http.put(this.baseUrl + "/api/user", { 'publicURL': "www.konsult-member.com/sean-williams" } ,{ headers: header })
  // }

  updateFees(data: number) {
    let header = new HttpHeaders();
    header = header.set('Authorization', "Bearer " + this.token);
    return this.http.put(this.baseUrl + "/api/user", { 'fees': data } ,{ headers: header })
  }

  updateSettings(country: string, currency: string) {
    let header = new HttpHeaders();
    header = header.set('Authorization', "Bearer " + this.token);
    return this.http.put(this.baseUrl + "/api/user", { 'settings' : { 'country': country, 'currency': currency } } ,{ headers: header })
  }

  fetchMember() {
    let header = new HttpHeaders();
    header = header.set('Authorization', "Bearer " + this.token);
    return this.http.get(this.baseUrl + "/api/user", { headers: header }).subscribe(
      (data: any) => {
        console.log('Now come the fetched raw data')
        console.log(data)
        let member = new Member;
        member.firstName = data.data.firstName;
        member.lastName = data.data.lastName;
        member.id = data.data._id;
        member.email = data.data.email;
        member.location = data.data.location;
        member.rating = data.data.rating;
        member.profession = data.data.profession;
        member.publicURL = data.data.publicUrl;
        member.featured = data.data.featured;
        member.websiteLink = data.data.websiteLink;
        member.facebookLink = data.data.facebookLink;
        member.twitterLink = data.data.twitterLink;
        member.linkedinLink = data.data.linkedinLink;
        member.totalEarnings = data.data.totalEarnings;
        member.views = data.data.views;
        member.settings = data.data.settings;
        member.services = data.data.services;
        member.about = data.data.about;
        member.bannerImage = data.data.bannerImage;
        member.picture = data.data.picture;
        member.reviewsCount = data.data.reviewsCount;
        member.settings = data.data.settings;
        member.fees = data.data.fees;
        this.isFetched = true;

        console.log(member)
        this.memberService.setMember(member);

        if(member.picture && member.firstName && member.lastName) {
          this.memberService.isProfileComplete = true;
        } else this.memberService.isProfileComplete = false;
        console.log('Now it fully fetched')
        this.fullyFetched.next(true);
      }
    )
  }

  updateRating(rating: number) {
    let header = new HttpHeaders();
    header = header.set('Authorization', "Bearer " + this.token);
    return this.http.put(this.baseUrl + "/api/user", { 'rating': rating } ,{ headers: header })
  }

  updateProfilePic(src: string) {
    let header = new HttpHeaders();
    header = header.set('Authorization', "Bearer " + this.token);
    return this.http.put(this.baseUrl + "/api/user", { 'picture': src } ,{ headers: header })
  }

  updateSocialLinks(linkType: string, data: string) {
    let header = new HttpHeaders();
    header = header.set('Authorization', "Bearer " + this.token);

    if(linkType === 'website') {
      return this.http.put(this.baseUrl + "/api/user", { 'websiteLink': data } ,{ headers: header })
    } else if(linkType === 'facebook') {
      return this.http.put(this.baseUrl + "/api/user", { 'facebookLink': data } ,{ headers: header })
    } else if(linkType === 'linkedin') {
      return this.http.put(this.baseUrl + "/api/user", { 'linkedinLink': data } ,{ headers: header })
    } else if(linkType === 'twitter') {
      return this.http.put(this.baseUrl + "/api/user", { 'twitterLink': data } ,{ headers: header })
    }
  }

  updateProfile(data: { firstName: string,
                        lastName: string,
                        profession: string,
                        location: string,
                        bannerImage: string,
                        about: string,
                        services: string,
                        fees: number}) {
      let header = new HttpHeaders();
      header = header.set('Authorization', "Bearer " + this.token);
      return this.http.put(this.baseUrl + "/api/user", data ,{ headers: header })
  }

  updateFeatured(data : string[]) {
    let header = new HttpHeaders();
    header = header.set('Authorization', "Bearer " + this.token);
    return this.http.put(this.baseUrl + "/api/user", { 'featured': data } ,{ headers: header })
  }

}
