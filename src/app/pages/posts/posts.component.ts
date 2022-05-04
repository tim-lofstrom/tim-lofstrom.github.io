import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map, mergeMap, Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { StateService } from 'src/app/service/state.service';
import { loadFront } from 'yaml-front-matter';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  content$: Observable<string> | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient, private stateService: StateService) { }

  ngOnInit(): void {

    const name = this.route.snapshot.paramMap.get('name');

    if (name) {
      const fileName = this.stateService.posts?.pipe(map(item => this.filterFilename(item, name)));
      this.content$ = fileName?.pipe(mergeMap(file => this.loadContent(file)));
    }

  }

  filterFilename(item: Post[], name: string) {
    return item.filter(post => (post as Post).title.includes(name))
      .flatMap(post => post.file)
      .reduce(file => file);
  }

  loadContent(file: string) {
    const post = 'assets/posts/' + file;
    const response$ = this.http.get(post, { responseType: 'text' });
    return response$.pipe(map(item => loadFront(item).__content));
  }

}
