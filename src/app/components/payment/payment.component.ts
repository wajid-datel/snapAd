import { Component, OnInit, ViewContainerRef, AfterViewInit, ViewChild } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, AfterViewInit {

  message = 'Please use the form below to pay:';
  isError = false;
  isPaid = false;
  amount = 12;
  creditCardNumber= '4111 1111 1111 1111';
  expirationDate = '10/2019';
  cvvNumber = 123;
  showForm = true;
  loading= true;

  @ViewChild('payPalButton') el;
  @ViewChild('cardForm') cardForm;
  @ViewChild('submitButtonForm') submitButtonForm;

  constructor(private paymentService: PaymentService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  ngAfterViewInit(){
    this.processPaypal();
    this.processPaymentWithHostedFields();
  }

  processPayment(){
    console.log(this.cvvNumber);
    let data = {amount: this.amount, creditCardNumber: this.creditCardNumber, expirationDate: this.expirationDate, cvv: this.cvvNumber };
    this.paymentService.processCard(data).subscribe((response: any)=> {
        console.log(response);
        this.toastr.success('Card: ' + JSON.stringify(response.creditCards[0]), 'Payment Successful' );
    }, e=> {this.toastr.error(e.message); console.log(e);})
  }

  processPaypal(){
    this.paymentService.processPaypal(this.el, this.amount).subscribe(response=>{
      console.log(response);
      this.toastr.success('PayPal: ' + JSON.stringify(response), 'PayPal Successful' );
    }, e=> {this.toastr.error(e.message); console.log(e);});
  }

  processPaymentWithHostedFields()
  {
    this.paymentService.processPaymentWithHostedFields(this.cardForm, this.submitButtonForm).subscribe((response: any)=> {
      console.log(response);
      this.toastr.success('Card: ' + JSON.stringify(response), 'Payment Successful' );
    }, e=> {this.toastr.error(e.message); console.log(e);})
  }
}
