import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartSerivce: CartServiceService) { }

  ngOnInit(): void {
    console.log('ngOnInit exe');
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    var result = this.cartSerivce.addToCart(product);
    if (result === true) {
      window.alert(product.name + " :add to cart success");
    }
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
}
