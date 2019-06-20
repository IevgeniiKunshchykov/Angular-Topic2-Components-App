import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from './../../../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializerProvider, routerReducers } from './router/router.state';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './router/router.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(routerReducers),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([RouterEffects]),

        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    declarations: [],
    providers: [
        RouterStateSerializerProvider
    ]
})
export class CoreStoreModule { }
