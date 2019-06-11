import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent, ProductComponent } from './products/components';
import { AboutComponent } from './layout/about/about.component';
import { ProductCommentsComponent } from './products/components/product-comments/product-comments.component';
import { CartListComponent } from './cart/components';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { ProductResolveGuard } from './core/guards/product.guard';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent
  },
  {
    path: 'products-list/info/:id',
    component: ProductComponent,
    resolve: {
      product: ProductResolveGuard
    }
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
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
