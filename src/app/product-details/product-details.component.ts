import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductService } from '../service/add-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productData: any;
  productQuantity: number = 1;
  quantity: number | undefined;
  user: any;

  constructor(
    private active: ActivatedRoute,
    private productSrc: AddProductService
  ) {}
  // ngOnInit(): void {
  //   let productId = this.active.snapshot.paramMap.get('productid');
  //   console.log(productId);
  //   productId &&
  //     this.productSrc.getProduct().subscribe((data) => {
  //       console.log(data);
  //       this.productData = data;
  //     });
  // }

  ngOnInit(): void {
    let productid = this.active.snapshot.paramMap.get('productId');
    console.log(productid);
    productid &&
      this.productSrc.getProductId(productid).subscribe((data) => {
        console.log(data);
        this.productData = data;
      });
  }

  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity++;
    } else if (this.productQuantity && val === 'min') {
      this.productQuantity--;
    }
  }
  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        console.log(this.productData);
        this.productSrc.localAddToCart(this.productData);
      }

      // console.log(this.productData);
    }
  }
}
