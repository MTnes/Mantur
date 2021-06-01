import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PaymentAccountsService {
  baseUrl = "https://mantur-server.herokuapp.com"
  token = localStorage.getItem('token');

  paypalConnected = false;

  constructor(private http: HttpClient) { }

  storePaypalCreds(data: any) {
    let header = new HttpHeaders();
    header = header.set('Authorization', "Bearer " + this.token);
    return this.http.put(this.baseUrl + "/api/user/payments/", { 'paypal': data } ,{ headers: header })
  }

  getPaymentInfo() {
    let header = new HttpHeaders();
    header = header.set('Authorization', "Bearer " + this.token);
    return this.http.get(this.baseUrl + "/api/user/payments/", { headers: header });
  }

}
