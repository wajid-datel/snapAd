import {Injectable, ElementRef} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Http, Headers, RequestOptions } from '@angular/http'
import * as braintree from 'braintree-web/client';
import * as hostedFields from 'braintree-web/hosted-fields';
import * as paypalCheckout from 'braintree-web/paypal-checkout'

declare let paypal: any;
declare let jQuery: any;
@Injectable()
export class PaymentService {

  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {
    this.loadScript();
  }

  processCard(cardDetails): Observable<any> {
    return new Observable((observer) => {
      this.getToken().subscribe(
        response => this.brainTreeCreate(response, observer, cardDetails),
        error2 => observer.error(error2));
    });
  }

  processPaypal(el: ElementRef, amount: number): Observable<any> {
    return new Observable(observer => {
      this.getToken().subscribe(response => {
        braintree.create({
          authorization: response.client_token
        }, (err, instance) => {
          if (err)
            observer.error(err);
          else {
            paypalCheckout.create({client: instance},
              (err, paypalInstance) => {
                if (err)
                  observer.error(err);
                else {
                  this.paypalCreateButton(paypalInstance, instance, amount, el, observer)
                }
              })
          }
        })
      }, error2 => observer.error(error2))
    })
  }

  processPaymentWithHostedFields(form: ElementRef, submitButtonForm: ElementRef):Observable<any>{
    return new Observable(observer=> {
      this.getToken().subscribe(response=> {
        braintree.create({authorization: response.client_token}, (err, instance) =>{
          if(err)
            observer.error(err);
          else {
            hostedFields.create({
              client: instance,
              style: {
                'input': {
                  'color': '#282c37',
                  'font-size': '16px',
                  'transition': 'color 0.1s',
                  'line-height': '3'
                },
                // Style the text of an invalid input
                'input.invalid': {
                  'color': '#E53A40'
                },
                // placeholder styles need to be individually adjusted
                '::-webkit-input-placeholder': {
                  'color': 'rgba(0,0,0,0.6)'
                },
                ':-moz-placeholder': {
                  'color': 'rgba(0,0,0,0.6)'
                },
                '::-moz-placeholder': {
                  'color': 'rgba(0,0,0,0.6)'
                },
                ':-ms-input-placeholder': {
                  'color': 'rgba(0,0,0,0.6)'
                }

              },
              fields: {
                number: {
                  selector: '#card-number',
                  placeholder: '1111 1111 1111 1111'
                },
                cvv: {
                  selector: '#cvv',
                  placeholder: '123'
                },
                expirationDate: {
                  selector: '#expiration-date',
                  placeholder: '10 / 2019'
                }
              }
            }, (err, hostedFieldsInstance)=>{
              if(err)
                observer.error(err);
              else{
                hostedFieldsInstance.on('validityChange', (event)=>{
                  let formvalid = Object.keys(event.fields).every((key)=>{
                    return event.fields[key].isValid;
                  });
                  if(formvalid)
                    jQuery('#button-pay').addClass('show-button');
                  else
                    jQuery('#button-pay').removeClass('show-button');
                });

                hostedFieldsInstance.on('empty', function (event) {
                  jQuery('header').removeClass('header-slide');
                  jQuery('#card-image').removeClass();
                  jQuery(form.nativeElement).removeClass();
                });

                hostedFieldsInstance.on('cardTypeChange', function (event) {
                  // Change card bg depending on card type
                  if (event.cards.length === 1) {
                    jQuery(form.nativeElement).removeClass().addClass(event.cards[0].type);
                    jQuery('#card-image').removeClass().addClass(event.cards[0].type);
                    jQuery('header').addClass('header-slide');

                    // Change the CVV length for AmericanExpress cards
                    if (event.cards[0].code.size === 4) {
                      hostedFieldsInstance.setAttribute({
                        field: 'cvv',
                        attribute: 'placeholder',
                        value: '1234'
                      });
                    }
                  } else {
                    hostedFieldsInstance.setAttribute({
                      field: 'cvv',
                      attribute: 'placeholder',
                      value: '123'
                    });
                  }
                });

                submitButtonForm.nativeElement.addEventListener('click', (event)=>{
                  event.preventDefault();
                  hostedFieldsInstance.tokenize((err, payload)=>{
                    if(err)
                      observer.error(err);
                    else
                      observer.next(payload);
                  });
                }, false);

              }
            })
          }
        })
      }, error2 => observer.error(error2));

    })
  }

  loadScript() {
    let node = document.createElement('script');
    node.src = 'https://www.paypalobjects.com/api/checkout.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    node.setAttribute('data-version-4', '');
    node.setAttribute('data-log-level', 'error');
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  getToken(): Observable<any> {
    return this.http.post('/api/v1/token', this.options).map(
      response => {
        return response.json();
      },
      error2 => {
        return error2;
      });
  }

  brainTreeCreate(response, observer, cardDetails) {
    braintree.create({
      authorization: response.client_token
    }, (err, instance) => {
      if (err)
        observer.error(err);
      else
        this.processCardPayment(instance, cardDetails)
          .subscribe(
            r => observer.next(r),
            e => observer.error(e));
    })
  }

  private processCardPayment(instance, cardDetails): Observable<any> {
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
        if (err)
          observer.error(err);
        observer.next(resp);
      });
    });
  }


  paypalCreateButton(paypalInstance, instance, amount, el, observer) {
   // console.log(paypalCheckout.render);
   // console.log(paypalLib.render);
    paypal.Button.render({
      env: 'sandbox', // or 'sandbox' 'production'

      payment: function () {

        return paypalInstance.createPayment({
          flow: 'checkout', // Required
          amount: amount, // Required
          currency: 'USD', // Required
          locale: 'en_US',
          enableShippingAddress: true,
          shippingAddressEditable: false,
          shippingAddressOverride: {
            recipientName: 'Scruff McGruff',
            line1: '1234 Main St.',
            line2: 'Unit 1',
            city: 'Chicago',
            countryCode: 'US',
            postalCode: '60652',
            state: 'IL',
            phone: '123.456.7890'
          }
        });
      },

      onAuthorize: function (data, actions) {
        return paypalInstance.tokenizePayment(data)
          .then(function (payload) {
            observer.next(payload);
          });
      },

      onCancel: function (data) {
        observer.next(data);
      },

      onError: function (err) {
        observer.error(err);
      }
    }, el.nativeElement)
  }

}
