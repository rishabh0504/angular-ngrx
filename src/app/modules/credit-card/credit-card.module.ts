import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardViewComponent } from './credit-card-view/credit-card-view.component';
import { PaymentComponent } from './payment/payment.component';
import { StoreModule } from '@ngrx/store';
import { creditCardFeatureKey, creditCardReducer } from './store/reducer/credit-card.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreditCardRouteModule } from './credit-card.route.module';



@NgModule({
  declarations: [CreditCardViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreditCardRouteModule,
    StoreModule.forFeature(creditCardFeatureKey, creditCardReducer),
  ],
  exports: [
    CreditCardViewComponent,
    PaymentComponent,
    CreditCardRouteModule
  ]
})
export class CreditCardModule { }
