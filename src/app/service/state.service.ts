import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../model/page';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private posts$: Observable<Post[]> | undefined;
  private pages$: Observable<Page[]> | undefined;

  get posts(): Observable<Post[]> | undefined {
    return this.posts$;
  }

  set posts(val: Observable<Post[]> | undefined) {
    this.posts$ = val;
  }

  get pages(): Observable<Page[]> | undefined {
    return this.pages$;
  }

  set pages(val: Observable<Page[]> | undefined) {
    this.pages$ = val;
  }

}

