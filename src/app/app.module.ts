import { SaleComponent } from './components/pages/sale/sale.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ProductsComponent } from './components/pages/products/products/products.component';
import { SellComponent } from './components/pages/products/sell/sell.component';
import { UploadproductsComponent } from './components/pages/products/uploadproducts/uploadproducts.component';
import { SingupComponent } from './components/pages/singup/singup.component';
import { ReportComponent } from './components/pages/report/report.component';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CartService } from './services/cart.service' ;
import { ProductComponent } from './components/pages/products/product/product.component';
import { CartComponent } from './components/pages/cart/cart.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    HeaderComponent,
    SlideshowComponent,
    FooterComponent,
    UploadproductsComponent,
    ContactComponent,
    ProfileComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ProductsComponent,
    SellComponent,
    SidenavListComponent,
    SingupComponent,
    ReportComponent,
    ProductComponent,
    CartComponent,
    SaleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

  ],

  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
