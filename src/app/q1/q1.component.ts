import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.scss']
})
export class Q1Component implements OnInit {
  cookieValue = "null";

  constructor(public cookieService: CookieService) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('estimationId');
  }

}
