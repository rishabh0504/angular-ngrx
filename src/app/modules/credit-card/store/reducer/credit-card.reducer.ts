import { Action, createReducer, on } from '@ngrx/store';
import { CreditCard } from 'src/app/models/credit-card';


import * as CreditCardAction from '../action/credit-card.actions';

export const creditCardFeatureKey = 'creditCard';

export interface CreditCardState {
  cardHistory: CreditCard[]
}

export const initialState: CreditCardState = {
  cardHistory: []
};


export const creditCardReducer = createReducer(
  initialState,
  on(CreditCardAction.loadCreditCards,
    (state: CreditCardState, { creditcard }) =>
    ({
      ...state,
      cardHistory: [...state.cardHistory, creditcard]

    }))

);
export function reducer(state: CreditCardState | undefined, action: Action): any {
  return creditCardReducer(state, action);
}

