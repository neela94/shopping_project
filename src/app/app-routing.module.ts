import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/Front-End/Home', pathMatch: 'full' },
  {
    path: 'Front-End',
    component: FrontEndComponent,
    children: [
      { path: 'Home', component: HomeComponent },
      { path: 'seller', component: SellerComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Contact', component: ContactComponent },
      { path: 'Blog', component: BlogComponent },
    ],
  },
  { path: 'search/:query', component: SearchComponent },

  { path: 'details/:productId', component: ProductDetailsComponent },
  {
    path: 'Auth',
    loadChildren: () =>
      import('./auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'Dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
