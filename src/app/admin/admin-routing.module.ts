import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProductsAdminComponent } from './components/products-admin/products-admin.component';

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
