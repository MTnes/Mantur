import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {

	baseUrl = environment.apiUrl;
	constructor(private http : HttpClient) { }

	getProfileData() {
		let header = new HttpHeaders();
		header = header.set('Authorization', "Bearer " + localStorage.getItem('token'))
		return this.http.get(this.baseUrl + "/api/user", { headers : header})
	}
}
