import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from '@angular/core'

import { PaymentComponent } from './payment.component';
import {ModuleComponent} from '../shared/module/module.component';
import {LoaderComponent} from '../shared/loader/loader.component';
import {FormsModule} from '@angular/forms';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {PaymentService} from '../../services/payment.service';
import {HttpModule} from '@angular/http';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';


describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentComponent, ModuleComponent, LoaderComponent ],
      imports:[FormsModule, NgbCollapseModule, HttpModule],
      providers: [PaymentService, ToastOptions, ToastsManager]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
