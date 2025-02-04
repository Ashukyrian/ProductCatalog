import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/home-page/main-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-list/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-list/product-detail/product-edit/product-edit.component';
import { ProductDeleteComponent } from './products/product-list/product-detail/product-delete/product-delete.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDetailComponent } from './category/category-list/category-detail/category-detail.component';
import { CategoryEditComponent } from './category/category-list/category-edit/category-edit.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryDeleteComponent } from './category/category-list/category-delete/category-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FooterComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductCreateComponent,
    HeaderComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    CategoryEditComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    
  ]
,
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
