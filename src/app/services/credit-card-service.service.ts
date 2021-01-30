import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class CreditCardServiceService {

  mapper: string[] = [];

  today: string = moment().format('MM/YY');;

  constructor() {
    console.log(this.today);
  }

  formatcardNumber(cardNumber: string) {
    const formatedCardNumber = cardNumber?.replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4") || null;
    return formatedCardNumber;
  }

  formatDate(date: string) {
    const formatedMonth = moment(date).format('MM/YY');
    return formatedMonth;
  }
}
