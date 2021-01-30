import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardViewComponent } from './credit-card-view/credit-card-view.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
    { path: '', redirectTo: 'payment', pathMatch: 'full' },
    { path: 'payment-history', component: CreditCardViewComponent, pathMatch: 'full' },
    { path: 'payment', component: PaymentComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreditCardRouteModule { }
