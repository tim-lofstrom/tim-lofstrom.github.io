import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Page } from 'src/app/model/page';
import { Post } from 'src/app/model/post';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {

  page$: Observable<string> | undefined;
  posts$: Observable<Post[]> | undefined;
  pages$: Observable<Page[]> | undefined;

  constructor(private route: ActivatedRoute, private stateService: StateService) { }

  ngOnInit(): void {
    this.page$ = this.route.params.pipe(map(item => item['page']));
    this.posts$ = this.stateService.posts;
    this.pages$ = this.stateService.pages;
  }

}
