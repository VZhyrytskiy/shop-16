import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartModel} from '../../models/cart.model';
import {CartItemModel} from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: CartItemModel[];
  cart: CartModel;

  constructor(public cartService: CartService) { }

  onQtyChanged(event: Event) { // зачем тут ставить тип
    this.cartService.updateItem(event as any); // если тут приводить к any?
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartItems = this.cartService.getProducts();
  }

}
