import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http'  // Dont forget

import { ProductGuardService } from './Product-Guard.Service'
import { ProductDetailsComponent } from './ProductDetails.component'
import { ProductListComponent } from './ProductListComponent'
import { ProductService } from './Product.Service'
import { SharedModule } from '../Shared/shared.module'

@NgModule({
    imports: [BrowserModule, HttpModule, SharedModule, RouterModule.forChild(
        [{ path: 'products', component: ProductListComponent },
        { path: 'product/:Id', canActivate: [ProductGuardService], component: ProductDetailsComponent }] // Routing Guard
    )],
    declarations: [ProductDetailsComponent, ProductListComponent],
    providers: [ProductService, ProductGuardService]  // use for service
})
export class ProductModule { }