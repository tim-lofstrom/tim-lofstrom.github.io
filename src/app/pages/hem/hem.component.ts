import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { StateService } from 'src/app/service/state.service';


@Component({
  selector: 'app-hem',
  templateUrl: './hem.component.html',
  styleUrls: ['./hem.component.css']
})
export class HemComponent implements OnInit {

  page = 'hem';

  posts$: Observable<Post[]> | undefined;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.posts$ = this.stateService.posts?.pipe(map(item => item.filter(post => post.page.includes(this.page))));
  }

}
