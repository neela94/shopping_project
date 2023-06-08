import { Component } from '@angular/core';
import { AddProductService } from 'src/app/service/add-product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
})
export class Product2Component {
  ProductData: any;
  productMessage: string | undefined;
  constructor(private productSrc: AddProductService) {
    this.getProduct();
  }

  getProduct() {
    this.productSrc.getProduct().subscribe((data) => {
      console.log(data);
      this.ProductData = data;
    });
  }
  deletData(data: any) {
    this.productSrc.getDeletData(data).subscribe((data) => {
      if (data) {
        this.productMessage = 'Product deleted successfullly';
      }
      console.log(data);
      this.getProduct();
    });

    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
}
