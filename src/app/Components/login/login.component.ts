import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginData } from 'src/app/shared/models/loginData';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private authService : AuthService, private router: Router) { }
	loginData : LoginData = {
		email : "",
		password : ""
	}

	ngOnInit(): void {
	}

	loginForm = new FormGroup({
		email : new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
		password : new FormControl('', [Validators.required])
	});

	get email() {
		return this.loginForm.get('email') as FormControl
	}

	get password() {
		return this.loginForm.get('password') as FormControl;
	}

	loginUser() {
		console.log("hi");
		this.authService.loginUser(this.loginData).subscribe((data : any) => {
			console.log(data)
			if(data.status) {
				localStorage.setItem('token', data.token)
				console.log('Token : ' + localStorage.getItem('token'))
				// window.location.href = "";
				this.router.navigate(['dashboard']);
			}
		}, (err) => {
			Swal.fire("Konsult", "Email Or Password Is Wrong", "error");
		})
	}

}
