import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductService } from '../service/add-product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchResult: any;
  constructor(
    private active: ActivatedRoute,
    private productSrc: AddProductService
  ) {}
  ngOnInit(): void {
    let query = this.active.snapshot.paramMap.get('query');
    console.log(query);
    query &&
      this.productSrc.searchProducts(query).subscribe((result) => {
        this.searchResult = result;
      });
  }
}
