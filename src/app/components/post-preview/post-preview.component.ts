import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {

  @Input() link: String | undefined;
  @Input() title: String | undefined;
  @Input() subTitle: String | undefined;
  @Input() postedBy: String | undefined;
  @Input() date: String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
