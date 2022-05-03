import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  name: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
