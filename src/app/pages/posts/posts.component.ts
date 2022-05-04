import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { loadFront } from 'yaml-front-matter';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  content$: Observable<string> | undefined;
  name: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.paramMap.get('name');

    if(this.name){
      const post = 'assets/posts/' + this.name + '.md';
      const response$ = this.http.get(post, { responseType: 'text' });
      this.content$ = response$.pipe(map(item => loadFront(item).__content));
    }

  }

}
