import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  message = 'Please use the form below to pay:';
  isError = false;
  isPaid = false;
  amount = 12;
  creditCardNumber= '4111 1111 1111 1111';
  expirationDate = '10/2019';
  showForm = true;
  constructor(private paymentService: PaymentService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {

    this.toastr.success('You are awesome!', 'Success!');

  }

  processPayment(){
    let data = {amount: this.amount, creditCardNumber: this.creditCardNumber, expirationDate: this.expirationDate};
    this.paymentService.processPayment(data).subscribe((response: any)=> {
      console.log(response)
      if(response.message)
        this.toastr.error(JSON.stringify(response.message), 'error');
      else
        this.toastr.success('Card: ' + JSON.stringify(response.creditCards[0]), 'Payment Successful' );
    })
  }
}
