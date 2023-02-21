import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  showNavbar: boolean = false;
  pageNames$: Observable<String[]> | undefined;

  constructor(private readonly router: Router, private readonly state: StateService) { }

  ngOnInit(): void {
    this.pageNames$ = this.state.posts?.pipe(map(item => this.pagenName(item)))
  }

  pagenName(item: Post[]) {
    return item.flatMap(post => post.page);
  }

  toggle() {
    this.showNavbar = !this.showNavbar;
  }

  navigate(url: String) {
    this.showNavbar = false;
    this.router.navigate([url])
  }

}
