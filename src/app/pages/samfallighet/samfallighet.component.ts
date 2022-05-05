import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-samfallighet',
  templateUrl: './samfallighet.component.html',
  styleUrls: ['./samfallighet.component.css']
})
export class SamfallighetComponent implements OnInit {

  page = 'samfallighet';

  constructor() { }

  ngOnInit(): void {
  }

}
