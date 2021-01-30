import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditCardServiceService } from 'src/app/services/credit-card-service.service';
import { loadCreditCards } from '../store/action/credit-card.actions';
import { CreditCardState } from '../store/reducer/credit-card.reducer';
import * as moment from 'moment';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CCValidation } from 'src/app/constants/credit-card.validation.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  bankName: string = 'Credit Card';
  validationObject: any = CCValidation;
  public paymentForm: FormGroup;
  minDate = moment(new Date()).format('YYYY-MM');
  creditCard: CreditCard;

  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private ccService: CreditCardServiceService,
    private apiService: HttpServiceService,
    private store: Store<CreditCardState>,
    private _snackBar: MatSnackBar
  ) {
    this.paymentForm = this.formBuilder.group({
      cardHolder: this.creditCard?.cardHolder,
      cardNumber: this.creditCard?.cardNumber,
      cvv: this.creditCard?.cvv,
      expiry: this.creditCard?.expiry,
      amount: this.creditCard?.amount,
    });
  }

  ngOnInit(): void {
  }
  formatcardNumber() {
    const cardNumber = this.paymentForm?.get('cardNumber').value;
    return this.ccService.formatcardNumber(cardNumber);
  }

  formatDate() {
    const expiry = this.paymentForm?.get('expiry').value;
    if (expiry) {
      return this.ccService.formatDate(expiry);
    }
    return null;
  }

  makePayment() {
    this.paymentForm.markAllAsTouched();
    if (this.paymentForm.status === 'INVALID') {
      return;
    }
    const formData: CreditCard = this.paymentForm.getRawValue();
    this.apiService.post('/pay', formData);
    this._snackBar.open('Payment Done', 'dance', {
      duration: 2000,
    });
    this.paymentForm.markAsPristine();
    this.paymentForm.markAsUntouched();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {

  }
}
