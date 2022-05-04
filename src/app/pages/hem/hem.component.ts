import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/service/posts.service';


@Component({
  selector: 'app-hem',
  templateUrl: './hem.component.html',
  styleUrls: ['./hem.component.css']
})
export class HemComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit(): void { 
    this.postsService.loadAllPosts();
  }

}
