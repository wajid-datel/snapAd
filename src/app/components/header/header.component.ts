import {Component, OnInit, ViewChild, Renderer2, ElementRef} from '@angular/core';
import {ResponsiveService} from "../../responsive.service";
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSearch: boolean;
  tutorial: boolean;
  @ViewChild('inputSearch') searchInput: ElementRef;
  constructor(private rend: Renderer2,
  public responsiveService: ResponsiveService) { }

  ngOnInit() {
  }

  searchClick(){
    this.showSearch = !this.showSearch;
    //TODO focus does not work
    //this.searchInput.nativeElement.focus();
    //console.log(this.searchInput);
    //this.searchInput.nativeElement.value ="dfa";
    //this.rend.invoke
    //document.getElementById('main-search-input').focus();
    this.searchInput.nativeElement.focus();
  }

  navOpenClick(){
    this.responsiveService.navOpen = !this.responsiveService.navOpen;
    this.responsiveService.adaptToScreenSize();
  }

  toggleNotificationPopup(){
    this.responsiveService.headerPopup == 'notifications' ? this.responsiveService.headerPopup = '' : this.responsiveService.headerPopup = 'notifications';
  }

  toggleMessagePopup(){
    this.responsiveService.headerPopup == 'messages' ? this.responsiveService.headerPopup = '' : this.responsiveService.headerPopup = 'messages';
  }

  toggleSidePanel(){
    this.responsiveService.headerPopup == 'side-panel' ? this.responsiveService.headerPopup = '' : this.responsiveService.headerPopup = 'side-panel';
  }

  toggleSettingsPopup(){
    this.responsiveService.headerPopup == 'settings' ? this.responsiveService.headerPopup = '' : this.responsiveService.headerPopup = 'settings';
  }

  toggleProfilePopup(){
    this.responsiveService.headerPopup == 'profile' ? this.responsiveService.headerPopup = '' : this.responsiveService.headerPopup = 'profile';
  }
}
