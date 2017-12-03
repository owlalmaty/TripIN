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

  myPosts: IPost[];
  constructor(private service:PostService) { }

  ngOnInit() {
    this.getPosts();
  }


  onCreate(cont: String) {
    console.log(cont);
    let post: IPost = {
      content: this.content
    };
    this.service.createPost(post);
    this.getPosts();
  }

  getPosts(){
    this.myPosts = this.service.getPosts();
  }

}
