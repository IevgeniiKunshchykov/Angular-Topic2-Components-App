import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ProductListComponent } from './products/components';
import { AboutComponent } from './layout/about/about.component';
import { ProductCommentsComponent } from './products/product-comments/product-comments.component';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'product-comments',
    component: ProductCommentsComponent,
    outlet: 'comments'
  },
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'products-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
