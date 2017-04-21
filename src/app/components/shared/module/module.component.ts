import {Component, Input, ViewChild} from '@angular/core';


declare var jQuery: any;

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent  {
  @Input()  wrapperClass: string = '';
  @Input()  moduleClass: string = '';
  @Input()  contentClass: string = '';
  @Input()  title: string ='';
  @Input()  meta: string =  '';
  @Input()  controls: boolean = true;
  @Input()  collapsed: boolean = false;

  @ViewChild('moduleElement') el;
  showMore: true;
  showFooter: true;

  constructor() { }

  collapseModule(): void {
    this.collapsed = !this.collapsed;
  }

  closeModule(){
    jQuery(this.el.nativeElement).hide('slow');
  }

}
