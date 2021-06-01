import { Component, OnInit, ViewChild } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import * as RecordRTC from 'recordrtc';

import { Request } from '../../../shared/models/request.model';
import { RequestsService } from '../../../shared/services/requests.service';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {

  request: Request;
  id: number;
  @ViewChild('video') video;

  constructor(private requestsService: RequestsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.video)

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.request = this.requestsService.getRequestByID(this.id);
      }
    );
    // this.video.nativeElement.src = this.request.answerVideo;
  }

  onReopen() {
    this.requestsService.updateStatus(this.id);
  }

}
