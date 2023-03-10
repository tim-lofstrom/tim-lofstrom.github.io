import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Page } from 'src/app/model/page';
import { StateService } from 'src/app/service/state.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

	showNavbar: boolean = false;
	pageNames$: Observable<String[]> | undefined;
	pages$: Observable<Page[]> | undefined;

	constructor(private readonly router: Router, private readonly stateService: StateService) { }

	ngOnInit(): void {
		this.pages$ = this.stateService.pages?.pipe(
			map(pages => pages.filter(page => !page.page.includes('index'))),
			map(item => item.sort((a, b) => b.page.localeCompare(a.page))));
	}

	toggle() {
		this.showNavbar = !this.showNavbar;
	}

	navigate(url: String) {
		this.showNavbar = false;
		this.router.navigate([url])
	}

}
