import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../responsive.service';
@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit() {
  }

  close(){
    this.responsiveService.headerPopup = ''
  }

}
