import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  productUrl = 'http://localhost:3000/product';
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get(this.productUrl);
  }

  getDeletData(id: any) {
    return this.http.delete(`${this.productUrl}/${id}`); //delet
  }

  getPostData(data: any, id = 0): Observable<any> {
    if (id == 0) {
      return this.http.post(this.productUrl, data);
    } else {
      return this.http.put(`${this.productUrl}/${id}`, data);
    }
  }
  getProductById(id: number) {
    return this.http.get(`${this.productUrl}/${id}`);
  }
  popularProducts() {
    return this.http.get('http://localhost:3000/product?_limit=5');
  }

  trendyProducts() {
    return this.http.get('http://localhost:3000/product?_limit=8');
  } //slider

  //serch
  searchProducts(query: any) {
    return this.http.get(`http://localhost:3000/product?q=${query}`);
  }
  getProductId(id: string) {
    return this.http.get(` http://localhost:3000/product/${id}`);
  }

  localAddToCart(data: any) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify(data));
      // } else {
      //   cartData = JSON.parse(localCart);
      //   cartData.push(data);
      //   localStorage.setItem('localCart', JSON.stringify(cartData));
      // }
      // return this.http.post('http://localhost:3000/cart', data);
    }
  }
}
