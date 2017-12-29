﻿import { Injectable } from '@angular/core'
import { IProduct } from './Product'
import { Observable } from 'rxjs/Observable'
import { Http, Response } from '@angular/http'
//import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import 'rxjs/add/Observable/throw'
import 'rxjs/add/operator/do' // 
import 'rxjs/add/operator/map' // 
import 'rxjs/add/operator/catch'


@Injectable()
export class ProductService {

    constructor(private _http: Http) { } //using HttpClient

    // private _productUrl = '/src/app/Shared/Product.json';


    getProductList(): Observable<IProduct[]> {
        return this._http.get('http://localhost:61688/api/product')
            .map((response: Response) => <IProduct[]>response.json())
            .catch(this.handleError);

    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }

    getProductByID(id: number): Observable<IProduct> {
        return this._http.get('http://localhost:61688/api/product/' + id)
            .map((response: Response) => <IProduct>response.json())
            .catch(this.handleError);

    }


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


    getProductList1(): IProduct[] {
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
    }


}