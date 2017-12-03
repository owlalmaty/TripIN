import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PeopleService } from '../services/people.service';
import { PostService } from '../services/post.service';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { ProfileFriendsComponent } from './profile-friends/profile-friends.component';
import { CoreModule } from '../core/core.module';
import { ProfileTripsComponent } from './profile-trips/profile-trips.component';
import { ProfilePostComponent } from './profile-post/profile-post.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';


@NgModule({
  imports: [
    ProfileRoutingModule,
    CommonModule,
    CoreModule
  ],
  providers: [PeopleService, PostService],
  declarations: [ProfileComponent, ProfileFriendsComponent, ProfileTripsComponent, ProfilePostComponent, ProfileFormComponent, ProfilePostComponent, ProfileFormComponent]
})
export class ProfileModule { }
