import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'   // ReactiveFormsModule
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http'  // Dont forget

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './Shared/PageNotFoundComponent'
import { WelcomeComponent } from './Welcome/Welcome.component'

import { ProductModule } from './Products/product.module'

import { signupComponent } from './Authentication/signup.component'
import { customerComponent } from './Customer/customer.component'


const appRoute: Routes = [
    { path: 'home', component: WelcomeComponent },
    { path: 'customer', component: customerComponent },
    { path: 'signup', component: signupComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, ProductModule, RouterModule.forRoot(appRoute)],
    declarations: [AppComponent, PageNotFoundComponent, WelcomeComponent, signupComponent, customerComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
