import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartListComponent} from './components/cart/cart-list.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  exports: [
    CartListComponent,
    // CartItemComponent не надо делать публичным
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
