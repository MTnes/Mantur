import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from '../../shared/models/request.model';
import { RequestsService } from '../../shared/services/requests.service';

@Component({
  selector: 'app-requests-main',
  templateUrl: './requests-main.component.html',
  styleUrls: ['./requests-main.component.css']
})
export class RequestsMainComponent implements OnInit {

  requests: Request[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.requests = this.requestsService.getRequests();
    console.log(this.requests)
  }

  onViewRequest() {
    this.router.navigate(['1'], { relativeTo: this.route });
  }

}
