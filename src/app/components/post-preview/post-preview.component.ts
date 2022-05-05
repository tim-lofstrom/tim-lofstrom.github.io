import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {

  @Input() page: string = "";
  posts$: Observable<Post[]> | undefined;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.posts$ = this.stateService.posts?.pipe(map(item => item.filter(post => post.page.includes(this.page))));
  }

}
