import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IPost } from '../profile/profile-post/profile-post.model';

@Injectable()
export class PostService {

  private post = new Subject<IPost>();
  public _post = this.post.asObservable();

  private posts: IPost[] = [];

  constructor() { }

  createPost(post: IPost) {
    this.post.next(post);
    this.posts.push(post);
  }

  getPosts(){
    return this.posts;
  }
}
