import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as formCreditCard from '../reducer/credit-card.reducer';

export const selectPaymentHistoryState = createFeatureSelector<formCreditCard.CreditCardState>(
    formCreditCard.creditCardFeatureKey,
);

export const selectPaymentHistory = createSelector(
    selectPaymentHistoryState,
    (state: formCreditCard.CreditCardState) => state.cardHistory
);