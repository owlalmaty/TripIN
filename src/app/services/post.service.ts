import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IPost } from '../profile/profile-post/profile-post.model';

@Injectable()
export class PostService {

  private post = new Subject<IPost>();
  public _post = this.post.asObservable();

  constructor() { }

  createPost(post: IPost) {
    this.post.next(post);
  }
}
