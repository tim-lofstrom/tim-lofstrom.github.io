import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/service/posts.service';
import { StateService } from 'src/app/service/state.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    standalone: false
})
export class PostsComponent implements OnInit {

  content$: Observable<string> | undefined;

  constructor(private route: ActivatedRoute,
    private stateService: StateService,
    private postService: PostsService) { }

  ngOnInit(): void {

    const name = this.route.snapshot.paramMap.get('name');

    if (name) {
      const fileName = this.stateService.posts?.pipe(map(item => this.filterFilename(item, name)));
      this.content$ = fileName?.pipe(mergeMap(file => this.postService.loadPostContent(file)));
    }

  }

  filterFilename(item: Post[], name: string) {
    return item.filter(post => (post as Post).title.includes(name))
      .flatMap(post => post.file)
      .reduce(file => file);
  }

}
