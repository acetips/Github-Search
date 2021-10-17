import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  repositories: any;
  userName: any = '';

  constructor(private profileService: ProfileService) { 
    
  }

  ngOnInit(): void {
    this.searchProfile()
  }

  searchProfile(){
    this.profileService.newProfile(this.userName);

    this.profileService.getUserDetails().then(profile =>{
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getUserRepositories().then(repository=>{
      this.repositories = repository;
    })
  }
}
