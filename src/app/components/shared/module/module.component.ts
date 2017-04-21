import {Component, OnInit, Input, ViewChild} from '@angular/core';


declare var jQuery: any;

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
})
export class ModuleComponent implements OnInit {
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

  ngOnInit() {
    ///TODO Component card does not animates.
    //jQuery(this.el.nativeElement).sortable();
  }

  collapseModule(){
      this.collapsed = !this.collapsed;
  }

  closeModule(){
    jQuery(this.el.nativeElement).hide('slow');
  }

}
