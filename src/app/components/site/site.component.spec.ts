import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { SiteComponent } from './site.component';
import { HeaderComponent, SideNavComponent, TourComponent, SidePanelComponent, NotificationPopupComponent, MessagesComponent, SettingsComponent } from '../index';
import {ResponsiveService} from '../../responsive.service';

describe('SiteComponent', () => {
  let component: SiteComponent;
  let fixture: ComponentFixture<SiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteComponent, HeaderComponent, SideNavComponent, TourComponent, SidePanelComponent, NotificationPopupComponent, MessagesComponent, SettingsComponent ],
      imports: [RouterTestingModule],
      providers: [ResponsiveService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
