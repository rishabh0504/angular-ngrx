import { createAction, props } from '@ngrx/store';
import { CreditCard } from 'src/app/models/credit-card';

export const loadCreditCards = createAction(
  '[CreditCard] Load CreditCards',
  (creditcard: CreditCard) => ({ creditcard })
);

export const loadCreditCardsSuccess = createAction(
  '[CreditCard] Load CreditCards Success',
  props<{ data: any }>()
);

export const loadCreditCardsFailure = createAction(
  '[CreditCard] Load CreditCards Failure',
  props<{ error: any }>()
);
