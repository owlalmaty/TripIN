import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-post',
  templateUrl: './profile-post.component.html',
  styleUrls: ['./profile-post.component.scss']
})
export class ProfilePostComponent implements OnInit {

  private _content : string;
  public get content() : string {
    return this._content;
  }
  public set content(v : string) {
    this._content = v;
  }

  constructor() { }

  ngOnInit() {
  }

}
