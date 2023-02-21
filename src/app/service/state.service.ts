import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private posts$: Observable<Post[]> | undefined;

  get posts(): Observable<Post[]> | undefined {
    return this.posts$;
  }

  set posts(val: Observable<Post[]> | undefined) {
    this.posts$ = val;
  }

}
