import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    (jQuery('#menu')).metisMenu();
  }

}
