import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { loadFront } from 'yaml-front-matter';
import { Index } from '../model';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postPath = 'assets/posts/';

  constructor(private http: HttpClient) { }

  public loadPostContent(name: string): Observable<string> {
    const post = this.postPath + name;
    const response$ = this.http.get(post, { responseType: 'text' });
    return response$.pipe(map(item => loadFront(item).__content));
  }
  

  public loadAllPostsMetadata(): Observable<Post[]> {
    const posts = 'assets/index.json';
    return this.http.get(posts, { responseType: 'json' }).pipe(map(item => (item as Index).posts));
  }

}
