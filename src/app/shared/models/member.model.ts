export class Member {

  public id: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public location: string;
  public rating: number = 0;
  public profession: string;
  public publicURL: string;
  public featured: {type: string, data: string}[] = [];
  public socials: {
    website: string,
    facebook: string,
    linkedin: string,
    twitter: string
  };
  public totalEarnings: number = 0;
  public views: number = 0;
  public reviewsCount: number = 0;
  public fees: number = 0;

  public settings: {
    country: string,
    currency: string
  } = { 'country': 'India', 'currency': 'INR' };

  public services: string;
  public about: string;
  public bannerImage: string;
  public picture: string;

  public reviews: {
    writtenBy: string,
    text: string,
    timeStamp: string,
    replied: boolean,
    reply: string
  }[] = [];

}
