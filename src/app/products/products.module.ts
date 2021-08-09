import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ProductComponent } from './containers/product/product.component';
import { ProductsComponent } from './containers/products/products.component';
import { reducer } from './store/products.reducer';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'new',
        component: ProductComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', reducer),
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    ProductsComponent
  ],
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  providers: [],
})
export class ProductsModule { }
