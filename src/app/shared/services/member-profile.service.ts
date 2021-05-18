import { Member } from '../models/member.model';
import { Subject } from 'rxjs/Subject';

export class MemberProfileService {

  member = new Member;
  memberUpdated = new Subject<Member>();

  constructor() {
    this.member.firstName = 'Sean';
    this.member.lastName = 'Williams';
    this.member.profession = 'Public Speaker, Author & Career Coach';
    this.member.location = 'Massachusetts, United States';
    this.member.fees = 49;
    this.member.about = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    this.member.services = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
    this.member.publicURL = 'www.konsult-member.com/sean-williams';
    this.member.bannerImage = 'assets/images/banner-big.jpg';
    this.member.picture = 'assets/images/avatar-2.jpg';
    this.member.rating = 2;
    this.member.reviewsCount = 0;
    this.member.featured.push({
      'type': 'image',
      'data': 'assets/images/img-4.jpg'
    });
    this.member.featured.push({
      'type': 'image',
      'data': 'assets/images/img-4.jpg'
    });
    this.member.featured.push({
      'type': 'image',
      'data': 'assets/images/img-4.jpg'
    });
  }

  updateProfile(data: { firstName: string,
                        lastName: string,
                        profession: string,
                        location: string,
                        bannerImage: string,
                        fees: number,
                        about: string,
                        services: string}) {

      this.member.firstName = data.firstName;
      this.member.lastName = data.lastName;
      this.member.profession = data.profession;
      this.member.location = data.location;
      this.member.bannerImage = data.bannerImage;
      this.member.fees = data.fees;
      this.member.about = data.about;
      this.member.services = data.services;

      this.memberUpdated.next(this.member);
  }

  updateProfilePic(url: string) {
    this.member.picture = url;
    this.memberUpdated.next(this.member);
  }

  updateSocial(type: string, url: string) {

    if(!this.member.socials) {
      this.member.socials = { 'website': '', 'facebook': '', 'linkedin': '', 'twitter': '' }
    }

    if(type === 'website') {
      this.member.socials.website = url;
    } else if(type === 'facebook') {
      this.member.socials.facebook = url;
    } else if(type === 'linkedin') {
      this.member.socials.linkedin = url;
    } else if(type === 'twitter') {
      this.member.socials.twitter = url;
    }

    this.memberUpdated.next(this.member);
    console.log(this.member.socials)
  }

  deleteFeatured(id: number) {
    this.member.featured.splice(id,1);
    this.memberUpdated.next(this.member);
  }

  addFeatured(feature: { type: string, data: string}) {
    console.log(feature)
    this.member.featured.push(feature);
    this.memberUpdated.next(this.member);
  }

  editFeatured(id: number, data: string) {
    this.member.featured[id].data = data;
    this.memberUpdated.next(this.member);
  }

}
