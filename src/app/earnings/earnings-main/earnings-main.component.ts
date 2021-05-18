import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-earnings-main',
  templateUrl: './earnings-main.component.html',
  styleUrls: ['./earnings-main.component.css']
})
export class EarningsMainComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onViewEarning() {
    this.router.navigate(['1'], { relativeTo: this.route });
  }

}
