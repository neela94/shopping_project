import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../service/add-product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  popularProduct: any;
  trendyProducts: any; //product slider

  constructor(private productService: AddProductService) {}

  ngOnInit(): void {
    this.productService.popularProducts().subscribe((data: any) => {
      console.log(data);
      this.popularProduct = data;
    }); //this is for slider scroll
    this.productService.trendyProducts().subscribe((data) => {
      this.trendyProducts = data;
    });
  }
}
