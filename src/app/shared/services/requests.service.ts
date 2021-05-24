import { Request } from '../models/request.model';

export class RequestsService {

  requests: Request[] = [];
  req = new Request;
  req2 = new Request;
  
  constructor() {
    this.req.clientName = 'Aamir Khan';
    this.req.status = 'Pending';
    this.req.requestedOn = '24 May 2021';
    this.req.requestText = 'Share your feedback on my business powerpoint presentation';
    this.req.requestVideo = 'assets/images/movie.mp4';
    this.req.answerVideo = 'assets/images/movie.mp4';
    this.req.answerText = 'This is answer from the member user';
    this.requests.push(this.req);

    this.req2.clientName = 'Akshay Kumar';
    this.req2.requestText = 'Do you have tips on remembering peoples names?';
    this.req2.requestedOn = '04 May 2021';
    this.req2.status = 'Replied'
    this.req2.requestVideo = 'assets/images/movie.mp4';
    this.req2.answerVideo = 'assets/images/movie.mp4';
    this.req2.answerText = 'This is answer from the member user';
    this.requests.push(this.req2);
  }

  getRequests() {
    return this.requests;
  }


}
