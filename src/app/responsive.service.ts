import { Injectable } from '@angular/core';
declare var jQuery: any;

@Injectable()
export class ResponsiveService {
  public compact: boolean;
  public mobile: boolean;
  public navOpen: boolean;
  public headerPopup: string ='';
  constructor() { }

  ngOnInit(){
  }

  adaptToScreenSize(){
    jQuery(window).bind('resize', () => { this.resize(); });
    this.resize();
  }

  resize(){
    this.compact = jQuery(window).width() <= 1200;
    this.mobile = jQuery(window).width() <= 768;
  }

}
