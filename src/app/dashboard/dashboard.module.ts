import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Home1Component } from './home1/home1.component';
import { About2Component } from './about2/about2.component';
import { Contact2Component } from './contact2/contact2.component';
import { Product2Component } from './product2/product2.component';
import { CurdAddProductComponent } from './curd-add-product/curd-add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DashbordComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    Home1Component,
    About2Component,
    Product2Component,
    Contact2Component,
    CurdAddProductComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, ReactiveFormsModule],
})
export class DashboardModule {}
