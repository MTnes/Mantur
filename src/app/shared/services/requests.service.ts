import { Request } from '../models/request.model';
import { Subject } from 'rxjs/Subject';

export class RequestsService {

  requests: Request[] = [];
  req = new Request;
  req2 = new Request;
  reqUpdated = new Subject<Request[]>();
  req3 = new Request;
  req4 = new Request;
  req5 = new Request;

  constructor() {
    this.req.clientName = 'Aamir Khan';
    this.req.status = 'Pending';
    this.req.requestedOn = '24 May 2021';
    this.req.requestText = 'Share your feedback on my business powerpoint presentation';
    this.req.requestVideo = 'assets/images/movie.mp4';
    this.req.answerVideo = '';
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

    this.req3.clientName = 'Chetan Bhagat';
    this.req3.status = 'Pending';
    this.req3.requestedOn = '01 May 2021';
    this.req3.requestText = 'Share your feedback on my business';
    this.req3.requestVideo = 'assets/images/movie.mp4';
    this.req3.answerVideo = '';
    this.req3.answerText = 'This is answer from the member user1234';

    this.req4.clientName = 'Priyanka Chopra';
    this.req4.status = 'Replied';
    this.req4.requestedOn = '24 April 2021';
    this.req4.requestText = 'Share your feedback on my business powerpoint presentation';
    this.req4.requestVideo = 'assets/images/movie.mp4';
    this.req4.answerVideo = 'assets/images/movie.mp4';
    this.req4.answerText = 'This is answer from the member user';

    this.req5.clientName = 'XYZ Singh';
    this.req5.status = 'Pending';
    this.req5.requestedOn = '24 April 2021';
    this.req5.requestText = 'Share your feedback on my business powerpoint presentation';
    this.req5.requestVideo = 'assets/images/movie.mp4';
    this.req5.answerVideo = '';
    this.req5.answerText = 'This is answer from the member user';

    this.requests.push(this.req3);
    this.requests.push(this.req4);
    this.requests.push(this.req5);
  }

  getRequests() {
    return this.requests;
  }

  getRequestByID(id: number) {
    return this.requests[id];
  }

  updateAnswerVideo(id: number, answer: string) {
    this.requests[id].answerVideo = answer;
    this.reqUpdated.next(this.requests);
  }

  updateStatus(id: number) {
    if(this.requests[id].status === 'Pending') {
      this.requests[id].status = 'Replied';
    } else {
      this.requests[id].status = 'Pending';
    }
  }

  calculatePendingRequests() {
    var num = 0;
    for(let req of this.requests) {
      if(req.status === 'Pending') {
        num += 1;
      }
    }
    return num;
  }

}
