import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleComponent } from './module.component';

import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

describe('ModuleComponent', () => {
  let component: ModuleComponent;
  let fixture: ComponentFixture<ModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleComponent ],
      imports: [NgbCollapseModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
