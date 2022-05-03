import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showNavbar: boolean = false;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  toggle(){
    this.showNavbar = !this.showNavbar;
  }

  navigate(url: string){
    this.showNavbar = false;
    this.router.navigate([url])
  }

}
