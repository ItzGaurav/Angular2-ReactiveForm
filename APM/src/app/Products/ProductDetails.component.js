"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Product_Service_1 = require("./Product.Service");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(_service, _router, _activateRoute) {
        this._service = _service;
        this._router = _router;
        this._activateRoute = _activateRoute;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._activateRoute.snapshot.params["Id"];
        this._service.getProductByID(id).subscribe(function (p) { return _this.product = p; });
    };
    ProductDetailsComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: './ProductDetails.component.html'
    }),
    __metadata("design:paramtypes", [Product_Service_1.ProductService, router_1.Router, router_1.ActivatedRoute])
], ProductDetailsComponent);
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=ProductDetails.component.js.map