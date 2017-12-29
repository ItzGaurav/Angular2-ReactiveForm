"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http"); // Dont forget
var Product_Guard_Service_1 = require("./Product-Guard.Service");
var ProductDetails_component_1 = require("./ProductDetails.component");
var ProductListComponent_1 = require("./ProductListComponent");
var Product_Service_1 = require("./Product.Service");
var shared_module_1 = require("../Shared/shared.module");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, shared_module_1.SharedModule, router_1.RouterModule.forChild([{ path: 'products', component: ProductListComponent_1.ProductListComponent },
                { path: 'product/:Id', canActivate: [Product_Guard_Service_1.ProductGuardService], component: ProductDetails_component_1.ProductDetailsComponent }] // Routing Guard
            )],
        declarations: [ProductDetails_component_1.ProductDetailsComponent, ProductListComponent_1.ProductListComponent],
        providers: [Product_Service_1.ProductService, Product_Guard_Service_1.ProductGuardService] // use for service
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map