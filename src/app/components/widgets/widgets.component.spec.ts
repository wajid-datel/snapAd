import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsComponent, ModuleComponent, LoaderComponent} from '../index';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap'

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsComponent, ModuleComponent, LoaderComponent ],
      imports: [NgbCollapseModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
