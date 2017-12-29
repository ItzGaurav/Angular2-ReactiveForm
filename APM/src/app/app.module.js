"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // ReactiveFormsModule
var router_1 = require("@angular/router");
var http_1 = require("@angular/http"); // Dont forget
var app_component_1 = require("./app.component");
var PageNotFoundComponent_1 = require("./Shared/PageNotFoundComponent");
var Welcome_component_1 = require("./Welcome/Welcome.component");
var product_module_1 = require("./Products/product.module");
var signup_component_1 = require("./Authentication/signup.component");
var customer_component_1 = require("./Customer/customer.component");
var appRoute = [
    { path: 'home', component: Welcome_component_1.WelcomeComponent },
    { path: 'customer', component: customer_component_1.customerComponent },
    { path: 'signup', component: signup_component_1.signupComponent },
    { path: 'welcome', component: Welcome_component_1.WelcomeComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, product_module_1.ProductModule, router_1.RouterModule.forRoot(appRoute)],
        declarations: [app_component_1.AppComponent, PageNotFoundComponent_1.PageNotFoundComponent, Welcome_component_1.WelcomeComponent, signup_component_1.signupComponent, customer_component_1.customerComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map