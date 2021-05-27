import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx'
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-konsult-paypal',
  templateUrl: './konsult-paypal.component.html',
  styleUrls: ['./konsult-paypal.component.css']
})
export class KonsultPaypalComponent implements OnInit {

  actionURL: string = '';
  url = 'https://mantur-server.herokuapp.com/api/user/paypal/getActionUrl';
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTRlMTdlOWEzYWM0MDAxNTUzNzNiMSIsImlhdCI6MTYyMTQxODM2NiwiZXhwIjoxNjMwMDU4MzY2fQ.4pdS8SvO7RZCww59_to-zT-fWjlUJ0zRZ7wAPv8XFkg";
  hrefData: string;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getActionURL();
    this.route.queryParams.subscribe(
      (data) => {
        console.log(data.thirdQuery)
      }
    );
    // console.log(this.route.snapshot.queryParams)
  }

  getActionURL() {
    let header = new HttpHeaders();
    header = header.set('Authorization', "Bearer " + this.token);
    this.http.get(this.url, { headers: header }).subscribe(
      (data) => {
        console.log(data)
        const fetched = JSON.parse(JSON.stringify(data))
        console.log(fetched.links[0].href)
        const href = fetched.links[1].href + '&displayMode=minibrowser';
        this.hrefData = href
      }
    );
  }

}
