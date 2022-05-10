import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartItem } from '../cart-item';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  items: CartItem[] = [];
  // items = this.cartService.getItems;
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(private cartService: CartServiceService,
    private formBuilder: FormBuilder) {
    this.refresh();
  }

  ngOnInit(): void {
    console.log('ngOnInit exe');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges exe');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked exe');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit exe');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked exe');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit exe');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck exe');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy exe');
  }

  private refresh() {
    this.items = this.cartService.getItems()
  }

  remove(productId: number) {
    this.cartService.removeForCart(productId);
    this.refresh();
  }

  removeAll() {
    this.cartService.clearCart();
    this.refresh();
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('submit order', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.refresh();
  }
}
