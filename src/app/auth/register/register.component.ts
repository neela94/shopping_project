import { Component } from '@angular/core';
import { SellerServiceService } from 'src/app/service/seller-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  sellerRegistrationForm: any;

  constructor(private sellerSrc: SellerServiceService, private route: Router) {
    this.sellerRegistrationForm = new FormGroup({
      name: new FormControl(),
      lname: new FormControl(),
      city: new FormControl(),
      mobile: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
    });
  }
  SignUp() {
    if (this.sellerRegistrationForm.invalid) {
      return;
    }

    this.sellerSrc
      .userSignUp(this.sellerRegistrationForm.value)
      .subscribe((result) => {
        console.log(result);
      });
    // console.log(this.sellerSignUpForm.value);
    this.route.navigate(['/Auth/login']);
  }
}
