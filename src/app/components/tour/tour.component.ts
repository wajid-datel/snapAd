import { Component, OnInit, Input } from '@angular/core';

declare var Shepherd: any;

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  @Input()
  tutorial: boolean = false;

  tour = new Shepherd.Tour({
    defaults: {
      showCancelLink: true,
      classes: 'shepherd-theme-arrows'
    }
  });

  constructor() { }

  ngOnInit() {


    this.tour.addStep('welcome', {
      text: ['Welcome! This is a guided tour example which you can use in your projects.'],
      attachTo: '.tour-trigger bottom',
      buttons: [
        {
          text: 'Exit',
          classes: 'shepherd-button-secondary',
          action: this.tour.cancel
        }, {
          text: 'Next',
          action: this.tour.next,
          classes: 'shepherd-button-primary'

        }
      ]
    });

    this.tour.addStep('dashboards', {
      title: 'Dashboards',
      text: 'Dashboard examples designed for specific use cases to show you the power of the template. We will add more dashboard designs in the future as well!',
      attachTo: '.nav-dashboards right',
      buttons: [
        {
          text: 'Back',
          classes: 'shepherd-button-secondary',
          action: this.tour.back
        }, {
          text: 'Next',
          action: this.tour.next
        }
      ]
    });

    this.tour.addStep('Widgets', {
      title: 'Widgets',
      text: 'Check out the various widgets you can use in your projects.',
      attachTo: '.nav-widgets right',
      buttons: [
        {
          text: 'Back',
          classes: 'shepherd-button-secondary',
          action: this.tour.back
        }, {
          text: 'Next',
          action: this.tour.next
        }
      ]
    });

    this.tour.addStep('app-pages', {
      title: 'App Pages',
      text: 'Discover the useful app pages. They are based on real-world use cases too.',
      attachTo: '.nav-forms right',
      buttons: [
        {
          text: 'Back',
          classes: 'shepherd-button-secondary',
          action: this.tour.back
        }, {
          text: 'Done',
          action: this.tour.next
        }
      ]
    });


    this.tour.on('complete', this.handleShepherdEvent);
    this.tour.on('cancel', this.handleShepherdEvent);
  }

  ngOnChanges(){
    this.tutorial? this.tour.start() : this.tour.cancel();
  }

  handleShepherdEvent(){
    setTimeout(()=>{
      this.tutorial = false
    }, 300);
  }

}
