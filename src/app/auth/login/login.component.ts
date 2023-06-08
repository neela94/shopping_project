import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  sellerLoginForm: any;

  constructor(private loginSrc: LoginServiceService, private route: Router) {
    this.sellerLoginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  SignUp() {
    if (this.sellerLoginForm.invalid) {
      return;
    }

    console.log(this.sellerLoginForm.value);
    this.loginSrc.getLogin().subscribe((data: any) => {
      console.log(data);

      const user = data.find((a: any) => {
        return (
          a.email === this.sellerLoginForm.value.email &&
          a.password === this.sellerLoginForm.value.password
        );
      });
      if (user) {
        alert('login successfully');
        this.route.navigate(['Dashboard/Dashboard']);
      } else {
        alert('invalid login');
      }

      // console.log(this.sellerSignUpForm.value);
    });
  }
}
