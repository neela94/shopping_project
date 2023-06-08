import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { Home1Component } from './home1/home1.component';
import { About2Component } from './about2/about2.component';
import { Contact2Component } from './contact2/contact2.component';
import { Product2Component } from './product2/product2.component';
import { CurdAddProductComponent } from './curd-add-product/curd-add-product.component';
const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashbordComponent,
    children: [
      { path: 'Home1', component: Home1Component },
      { path: 'About2', component: About2Component },
      { path: 'Contact2', component: Contact2Component },
      { path: 'Product2', component: Product2Component },
      { path: 'curd_addProduct', component: CurdAddProductComponent },
      { path: 'update_products/:id', component: CurdAddProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
