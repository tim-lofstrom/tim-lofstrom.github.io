import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
})
export class PostPreviewComponent {

  @Input() page: string | undefined;
  @Input() posts: Post[] | undefined | null;

  postByName = (name: string | undefined) => name ? this.posts?.filter(item => item.page.includes(name)) : [];

}
