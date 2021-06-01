import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/shared/models/registerData';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import Swal from 'sweetalert2'

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor(private authService : AuthService,
				private router : Router) { }
	registerData: RegisterData = {
		firstName: "",
		lastName: "",
		email: "",
		password: ""
	}

	ngOnInit(): void {
	}

	registerForm = new FormGroup({
		firstName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
		lastName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
		email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
		password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
	});

	get firstName() {
		return this.registerForm.get('firstName') as FormControl;
	}

	get lastName() {
		return this.registerForm.get('lastName') as FormControl;
	}

	get email() {
		return this.registerForm.get('email') as FormControl;
	}

	get password() {
		return this.registerForm.get('password') as FormControl;
	}

	registerUser() {
		this.authService.registerUser(this.registerData).subscribe((data : any) => {
			if(data.status) {
				localStorage.setItem('token', data.token)
				window.location.href = "https://konsult-app.herokuapp.com/profile";
			}
			else {
				Swal.fire("Konsult", "Registration Failed. Try Again!", "error");
			}
		})
	}

}
