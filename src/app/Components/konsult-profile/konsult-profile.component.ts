import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile/profile.service';

@Component({
	selector: 'app-konsult-profile',
	templateUrl: './konsult-profile.component.html',
	styleUrls: ['./konsult-profile.component.css']
})
export class KonsultProfileComponent implements OnInit {

	constructor(private profileService: ProfileService) { }

	ngOnInit(): void {
		this.profileService.getProfileData().subscribe((data : any) => {
			console.log(data)
		})
	}


}
