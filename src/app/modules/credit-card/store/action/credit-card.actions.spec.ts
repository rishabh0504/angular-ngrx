import { CreditCard } from 'src/app/models/credit-card';
import * as fromCreditCard from './credit-card.actions';

describe('loadCreditCards', () => {
  it('should return an action', () => {
    expect(fromCreditCard.loadCreditCards(new CreditCard()).type).toBe('[CreditCard] Load CreditCards');
  });
});
