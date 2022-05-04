import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PostsService } from './service/posts.service';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public stateService: StateService, private postsService: PostsService) { }

  async ngOnInit() {
    this.stateService.posts = this.postsService.loadAllPosts();
  }

}
