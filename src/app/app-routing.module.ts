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
    path: 'inicio',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'registrar_producto',
    component: UploadproductsComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch:'full'
  },
  {
    path: 'reportar_producto',
    component: ReportComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch:'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch:'full'
  },
  {
    path: 'mycart',
    component: SaleComponent,
    pathMatch:'full'
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    pathMatch:'full'
  },
  {
    path: 'cart/:id',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
