import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-rep',
  templateUrl: './rep.component.html',
  styleUrls: ['./rep.component.css']
})
export class RepComponent implements OnInit {

  repositories: any;
  userName = ''
  constructor(private profileService:ProfileService) { }

  searchRepos ( ){
    this.profileService.newRepos(this.userName)
    this.profileService.getUserRepositories().then(repository=>{
      this.repositories = repository;
    })
  }

  ngOnInit(): void {
    this.searchRepos();
  }

}
