import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(public cookieService: CookieService) { }

  ngOnInit() {
    let expiredDate = new Date();
    // expiredDate.setDate( expiredDate.getDate() + 1 );

    //Set 'expires' option in 1 minute
    expiredDate.setMinutes(expiredDate.getMinutes() + 1); 
    // Set 'expires' option in 2 hours
    // expiredDate.setMinutes(expiredDate.getMinutes() + 120); 
    // //Set 'expires' option in (60 x 60) seconds = 1 hour
    // expiredDate.setSeconds(expiredDate.getSeconds() + 3600); 

    this.cookieService.set( 'estimationId', 'ad123456', expiredDate );
  }

}
