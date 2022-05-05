import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map, mergeMap, Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/service/posts.service';
import { StateService } from 'src/app/service/state.service';
import { loadFront } from 'yaml-front-matter';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  content$: Observable<string> | undefined;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private stateService: StateService,
    private postService: PostsService) { }

  ngOnInit(): void {

    this.http.get('/assets/posts/a.md', { responseType: 'text' }).toPromise().then(i => console.log(i));
    this.http.get('assets/posts/a.md', { responseType: 'text' }).toPromise().then(i => console.log(i));

    this.http.get('/assets/posts/b', { responseType: 'text' }).toPromise().then(i => console.log(i));
    this.http.get('assets/posts/b', { responseType: 'text' }).toPromise().then(i => console.log(i));

    this.http.get('/assets/c.md', { responseType: 'text' }).toPromise().then(i => console.log(i));
    this.http.get('assets/c.md', { responseType: 'text' }).toPromise().then(i => console.log(i));

    const name = this.route.snapshot.paramMap.get('name');

    if (name) {
      const fileName = this.stateService.posts?.pipe(map(item => this.filterFilename(item, name)));
      this.content$ = fileName?.pipe(mergeMap(file => this.postService.loadPost(file)));
    }

  }

  filterFilename(item: Post[], name: string) {
    return item.filter(post => (post as Post).title.includes(name))
      .flatMap(post => post.file)
      .reduce(file => file);
  }

}
