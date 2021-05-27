import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from '../../shared/models/request.model';
import { RequestsService } from '../../shared/services/requests.service';
import { Subject } from 'rxjs/Subject';
import * as RecordRTC from 'recordrtc';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-requests-main',
  templateUrl: './requests-main.component.html',
  styleUrls: ['./requests-main.component.css']
})
export class RequestsMainComponent implements OnInit, AfterViewInit {

  requests: Request[] = [];

  // Variables for pagination setting
  numOfEntries = 3;
  config: any;
  @ViewChild('numEntries') numEntries;
  configChanged = new Subject<{id: string, itemsPerPage: number, currentPage: number, totalItems: number}>();

  // Video Recorder Variables
  private stream: MediaStream;
  private recordRTC: any;
  @ViewChild('video') video;
  currentIndex: number;

  constructor(private router: Router, private route: ActivatedRoute, private requestsService: RequestsService) {
    this.config = {
      id: 'custom',
      itemsPerPage: this.numOfEntries,
      currentPage: 1,
      totalItems: this.requests.length
    }
  }

  ngOnInit(): void {
    this.requests = this.requestsService.getRequests();
    this.configChanged.subscribe(
      (config: { id: string, itemsPerPage: number, currentPage: number, totalItems: number }) => {
        this.config = config;
        console.log(this.config)
      }
    );
    this.requestsService.reqUpdated.subscribe(
      (data: Request[]) => {
        this.requests = data;
      }
    );
  }

  ngAfterViewInit() {
    // set the initial state of the video
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  // Pagination Control Starts
  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }

  onChange() {
    this.config.itemsPerPage = this.numEntries.nativeElement.value;
    this.configChanged.next(this.config);
  }
  // Pagination Control Ends

  onViewRequest() {
    // this.router.navigate(['this.currentIndex'], { relativeTo: this.route });
  }


  // Video Recorder Controls Starts

  onClickRecord(id: number) {
    this.currentIndex = id;
    // this.toggleControls();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.src=null
    // console.log('Recording for client ' + this.requests[this.currentIndex].clientName)
  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {

    var options = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    // video.src = window.URL.createObjectURL(stream);
    video.srcObject = stream;
    this.toggleControls();
  }

  errorCallback() {
    //handle error here
  }

  processVideo(audioVideoWebMURL) {
    let video: HTMLVideoElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.srcObject = null;
    console.log('type of video format : ' +typeof audioVideoWebMURL)
    console.log('audiovideoWebMURL is ' + audioVideoWebMURL)
    video.src = audioVideoWebMURL;
    video.play();
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    this.requestsService.updateAnswerVideo(this.currentIndex, URL.createObjectURL(recordedBlob));
    console.log('Recorded Blob ' + URL.createObjectURL(recordedBlob))
    recordRTC.getDataURL(function (dataURL) { });
  }

  startRecording() {
    let mediaConstraints = {
      audio: true,
      video: true
    };
    navigator.mediaDevices
    .getUserMedia(mediaConstraints)
    .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  stopRecording() {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());

    // const blob = this.recordRTC.getBlob();
    // const data = new FormData();
    // data.append("video", blob);
    // data.append("timestamp", new Date().toLocaleString());
    //
    // this.http.post<any>(this.serverUrl, data)
    //   .subscribe(
    //     (res) => console.log(res),
    //     (err) => console.log(err)
    //   );

  }

  onUpload() {
    // this.recordRTC.save('video.webm');
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = true;
    this.requestsService.updateStatus(this.currentIndex);
    console.log(this.requests[this.currentIndex])
  }

  // Video Recorder Controls Ends

}
