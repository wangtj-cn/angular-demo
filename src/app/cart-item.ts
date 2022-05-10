import { Product } from "./products";

export interface CartItem {
    productId: number;
    count: number;
    data: Product;
}
