import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditCardState } from '../store/reducer/credit-card.reducer';
import { selectPaymentHistory } from '../store/selector/credit-card.selectors';

@Component({
  selector: 'app-credit-card-view',
  templateUrl: './credit-card-view.component.html',
  styleUrls: ['./credit-card-view.component.scss']
})
export class CreditCardViewComponent implements OnInit {
  paymentHistory$: Observable<CreditCard[]>;
  data: any = {};
  constructor(
    private store: Store<CreditCardState>
  ) {

  }

  async ngOnInit() {
    this.paymentHistory$ = this.store.pipe(select(selectPaymentHistory));
  }

  getJsonData(paymentHistory) {
    return JSON.stringify(paymentHistory);
  }

}
