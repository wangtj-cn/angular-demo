import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  items: CartItem[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    var item = this.search(product.id);
    if (item === undefined) {
      // 创建一条购物车记录
      let x: CartItem = {
        count: 1,
        data: product,
        productId: product.id
      };
      this.items.push(x);
      return true;
    } else {
      item.count++;
      return false;
    }
  }

  // 移除购物车单品
  removeForCart(productId: number) {
    var tmp = this.items.filter(item => item.productId !== productId);
    if (tmp.length === this.items.length) {
      window.alert(productId + "is not in cart")
    }
    this.items = tmp;
  }

  // 清空购物车
  clearCart() {
    this.items = [];
    return this.items;
  }

  // 获取购物车记录
  getItems() {
    return this.items;
  }

  private search(productId: number) {
    return this.items.find(product => productId === product.productId)
  }

  getShippingPrices() {
    var result = this.http.get<{ type: String, price: number }[]>('/assets/shipping.json');
    // let headers : {[header: string]: string} = {
    //   // "Accept": "*/*",
    //   // "Access-Control-Allow-Origin": "*"
    // };

    // var result = this.http.get<{ type: String, price: number }[]>('http://localhost:8081/test/shipping', headers);
    console.log(result);
    return result;
  }
}
