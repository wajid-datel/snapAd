import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Http, Response, Headers, RequestOptions } from '@angular/http'
import * as braintree from 'braintree-web/client';





@Injectable()
export class PaymentService {

  headers = new Headers({ 'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});
  constructor(private http: Http) {

  }

  getToken():Observable<any>{
    return this.http.post('http://localhost:3001/api/v1/token', this.options).map((response: Response)=> {
      return response.json();
    }).catch(this.handleError);
  }

  processPayment(cardDetails): Observable<any>{

    return new Observable((observer) =>{
      this.getToken().subscribe(response=> {
        braintree.create({
          authorization: response.client_token
        }, (err, instance)=> {
          if (err)
            observer.next(err);
          else
            this.processCard(instance, cardDetails).subscribe(r => observer.next(r));
        })
      });
    });

  }

  processCard(instance, cardDetails): Observable<any> {
    let data = {
      creditCard: {
        number: cardDetails.creditCardNumber,
        cvv: cardDetails.cvv,
        expirationDate: cardDetails.expirationDate,
        billingAddress: {
          postalCode: '13519'
        },
        options: {
          validate: true
        }
      }
    };


    return new Observable((observer) => {
      instance.request({
        endpoint: 'payment_methods/credit_cards',
        method: 'post',
        data: data
      }, (err, resp) => {
        if (err)console.log(err);
        observer.next(resp);
      });

    });


  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
