import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requests-main',
  templateUrl: './requests-main.component.html',
  styleUrls: ['./requests-main.component.css']
})
export class RequestsMainComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onViewRequest() {
    this.router.navigate(['1'], { relativeTo: this.route });
  }

}
