import { SaleComponent } from './components/pages/sale/sale.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CartComponent } from './components/pages/cart/cart.component';

import { HomeComponent } from './components/pages/home/home.component';
import { ProductComponent } from './components/pages/products/product/product.component';
import { UploadproductsComponent } from './components/pages/products/uploadproducts/uploadproducts.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ReportComponent } from './components/pages/report/report.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registrar_producto',
    component: UploadproductsComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'reportar_producto',
    component: ReportComponent
  },
  {
    path: 'registrarse',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'mycart',
    component: SaleComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'cart/:id',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
