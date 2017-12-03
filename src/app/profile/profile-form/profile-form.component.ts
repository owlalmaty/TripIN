import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../profile-post/profile-post.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  content: string = "";

  constructor(private service:PostService) { }

  ngOnInit() {
  }


  onCreate() {
    let post: IPost = {
      content: this.content
    };
    this.service.createPost(post);
  }

}
