import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from 'src/app/shared/models/loginData';
import { RegisterData } from 'src/app/shared/models/registerData';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http : HttpClient ) { }
	baseUrl = environment.apiUrl

	loginUser(loginData : LoginData) {
		return this.http.post(this.baseUrl + '/signin', loginData)
	}

	registerUser(registerData : RegisterData) {
		return this.http.post(this.baseUrl + '/signup', registerData)
	}
}
