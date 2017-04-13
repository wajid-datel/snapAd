import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../responsive.service';
@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.css']
})
export class NotificationPopupComponent implements OnInit {


  constructor(public  resService: ResponsiveService) { }

  ngOnInit() {
  }

}
