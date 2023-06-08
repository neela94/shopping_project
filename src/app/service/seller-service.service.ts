import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SellerServiceService {
  sellerUrl = ' http://localhost:3000/seller';
  constructor(private http: HttpClient) {}

  userSignUpGet() {
    return this.http.get(this.sellerUrl);
  }
  userSignUp(data: any) {
    return this.http.post(this.sellerUrl, data);
  }
}
