import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../service/add-product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchResult: any;
  cartItem = 0;
  constructor(
    private productService: AddProductService,
    private router: Router
  ) {}

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      console.log(element.value);
      this.productService.searchProducts(element.value).subscribe((data) => {
        console.log(data);
        this.searchResult = data;

        // if(result.length> 5){
        //   result.lenghth=5;
        // }
      });
    }
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItem = JSON.parse(cartData).length;
    }
  }
  hideSearch() {
    this.searchResult = undefined;
  }

  submitSearch(val: any) {
    this.router.navigate([`search/${val}`]);
  }
}
