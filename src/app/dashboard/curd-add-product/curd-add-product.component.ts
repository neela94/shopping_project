import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddProductService } from 'src/app/service/add-product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-curd-add-product',
  templateUrl: './curd-add-product.component.html',
  styleUrls: ['./curd-add-product.component.css'],
})
export class CurdAddProductComponent {
  addProductForm: any;
  frm: any;
  blogImageSrc: any;
  id: number = 0;
  item: any;
  FileUplode: any;
  addMsg: string | undefined;

  constructor(
    private productSrc: AddProductService,
    private router: Router,
    private active: ActivatedRoute
  ) {
    this.addProductForm = new FormGroup({
      productName: new FormControl(),
      price: new FormControl(),
      productDescription: new FormControl(),
      productNameCategory: new FormControl(),
    });
    this.id = this.active.snapshot.params['id'];
    if (this.id > 0 && this.id != 0) {
      this.getProductById();
    }
  }

  SaveNewProduct() {
    let frm = {
      id: this.id,

      productName: this.addProductForm.controls['productName'].value,
      price: this.addProductForm.controls['price'].value,
      productDescription:
        this.addProductForm.controls['productDescription'].value,
      productNameCategory:
        this.addProductForm.controls['productNameCategory'].value,
      productImage: this.blogImageSrc,
    };
    this.productSrc.getPostData(frm, this.id).subscribe((data) => {
      console.log(data);

      this.router.navigate(['/Dashboard/Product2']);
    });
  }

  //It is for image upload on input box though file
  onfileChange(e: any) {
    if (e.target.files.length > 0) {
      var file;
      if (e.target.files && e.target.files[0]) {
        file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = (event: any) => {
          var res = (<FileReader>event.target).result as string;
          this.blogImageSrc = res;
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  }

  //it is for data edit through id & display the form to edit & update chnages
  getProductById() {
    this.productSrc.getProductById(this.id).subscribe((data) => {
      this.item = data;
      console.log('result', data);
      this.patchDataProduct();
    });
  }

  patchDataProduct() {
    this.addProductForm.setValue({
      //id: this.item.id,
      productName: this.item.productName,
      price: this.item.price,
      productDescription: this.item.productDescription,
      productNameCategory: this.item.productNameCategory,
    });
    this.blogImageSrc = this.item.productImage;
  }
}
