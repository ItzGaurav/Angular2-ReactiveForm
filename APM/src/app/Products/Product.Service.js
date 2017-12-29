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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
//import { HttpClient, HttpErrorResponse } from '@angular/common/http'
require("rxjs/add/Observable/throw");
require("rxjs/add/operator/do"); // 
require("rxjs/add/operator/map"); // 
require("rxjs/add/operator/catch");
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
    } //using HttpClient
    // private _productUrl = '/src/app/Shared/Product.json';
    ProductService.prototype.getProductList = function () {
        return this._http.get('http://localhost:61688/api/product')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    ProductService.prototype.getProductByID = function (id) {
        return this._http.get('http://localhost:61688/api/product/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //getProductList(): Observable<IProduct[]> {
    //    debugger;
    //    return this._httpClient.get<IProduct[]>(this._productUrl)
    //        .do(data=>console.log('All: '+ JSON.stringify(data)))
    //        .catch(this.handleError);
    //}
    //handleError(error: HttpErrorResponse) {
    //    console.error(error);
    //    return Observable.throw(error);
    //}
    ProductService.prototype.getProductList1 = function () {
        return [
            {
                "productID": 1,
                "productName": "Garden Cart",
                "productCode": "PC - 1",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity",
                "price": 525,
                "starRaiting": 4.2,
                "imageUrl": "https://images.homedepot-static.com/productImages/008a1bb6-eaf2-4aa6-a495-971c863d86a1/svn/gorilla-carts-yard-carts-gor6ps-64_400_compressed.jpg"
            },
            {
                "productID": 2,
                "productName": "Hammer",
                "productCode": "PC - 2",
                "releaseDate": "April 18, 2017",
                "description": "For Avrage Use",
                "price": 201,
                "starRaiting": 3,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Claw-hammer.jpg/220px-Claw-hammer.jpg"
            },
            {
                "productID": 3,
                "productName": "Wrench",
                "productCode": "PC - 3",
                "releaseDate": "jan 1, 2015",
                "description": "Every Size",
                "price": 300,
                "starRaiting": 4.5,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Gedore_No._7_combination_wrenches_6%E2%80%9319_mm.jpg/250px-Gedore_No._7_combination_wrenches_6%E2%80%9319_mm.jpg"
            },
            {
                "productID": 4,
                "productName": "Drill Machine",
                "productCode": "PC - 4",
                "releaseDate": "March 18, 2010",
                "description": "very Effective",
                "price": 650,
                "starRaiting": 4.2,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Drill_scheme.svg/220px-Drill_scheme.svg.png"
            },
            {
                "productID": 5,
                "productName": "Pliers",
                "productCode": "PC - 5",
                "releaseDate": "Feb 14, 2017",
                "description": "Good",
                "price": 125,
                "starRaiting": 1,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tool-pliers.jpg/220px-Tool-pliers.jpg"
            }
        ];
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=Product.Service.js.map