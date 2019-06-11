import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProductsAdminComponent } from './components/products-admin/products-admin.component';
import { ProductComponent } from '../products/components';
import { OrdersListComponent } from '../orders/components/orders-list/orders-list.component';
import { ProductResolveGuard } from '../core/guards/product.guard';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: 'products', component: ProductsAdminComponent },
                    { path: 'products/add', component: ProductComponent, resolve: { product: ProductResolveGuard } },
                    { path: 'products/edit/:id', component: ProductComponent, resolve: { product: ProductResolveGuard } },
                    { path: 'orders', component: OrdersListComponent },
                    { path: '', redirectTo: 'products' },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
