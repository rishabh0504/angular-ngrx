import { Injectable } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { CreditCardState } from '../modules/credit-card/store/reducer/credit-card.reducer';
import { loadCreditCards } from '../modules/credit-card/store/action/credit-card.actions';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl: string = 'http://localhost:3001';
  constructor(
    private http: HttpClient,
    private store: Store<CreditCardState>
  ) {

  }


  async post(url: string, ccData: CreditCard): Promise<void> {
    let products: CreditCard;
    await this.http.post<CreditCard>(`${this.baseUrl}${url}`, ccData).subscribe(async (data: CreditCard) => {
      products = data;
      this.store.dispatch(loadCreditCards(data));
    }, error => {
      console.log(error);
    });
  }
}
