import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public myProfile: any[];
  
  
  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService) { }

    myFriends: any[];
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.myProfile = data.testData;
    })
  }
}
