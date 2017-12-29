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
var Product_Service_1 = require("./Product.Service");
var ProductListComponent = (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = "Product List";
        this.showImage = false;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProductList().subscribe(function (products) { return _this.Products = products; }, function (error) { console.error(error); });
        // this.Products = this._productService.getProductList();
        this.filteredProducts = this.Products;
        this.filterby = "";
    };
    ProductListComponent.prototype.toggeleImage = function () {
        this.showImage = !this.showImage;
    };
    Object.defineProperty(ProductListComponent.prototype, "filterby", {
        get: function () {
            return this._filterby;
        },
        set: function (value) {
            this._filterby = value;
            this.filteredProducts = this.filterby ? this.performFilter(this.filterby) : this.Products;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.Products.filter(function (products) {
            return products.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    //Output -- receiving value from child component
    ProductListComponent.prototype.onRatingClickEvent = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'productList',
        templateUrl: './ProductListComponent.html',
        styleUrls: ['./ProductListComponent.css']
    }),
    __metadata("design:paramtypes", [Product_Service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=ProductListComponent.js.map