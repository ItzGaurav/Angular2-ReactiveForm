import { Component, OnInit } from '@angular/core'
import { IProduct } from './Product'
import { ProductService } from './Product.Service'
import { Http } from '@angular/http'

@Component({
    selector: 'productList',
    templateUrl: './ProductListComponent.html', // ./ for relative path
    styleUrls: ['./ProductListComponent.css']
})
export class ProductListComponent implements OnInit { // not requir -- implements OnInit

    Products: IProduct[];
    filteredProducts: IProduct[];

    constructor(private _productService: ProductService) {

    }

    errorMessage: any;

    ngOnInit(): void {

        this._productService.getProductList().subscribe(
            products => this.Products = products, error => { console.error(error) });
        // this.Products = this._productService.getProductList();


        this.filteredProducts = this.Products;
        this.filterby = "";

    }

    pageTitle: string = "Product List";

    showImage: boolean = false;

    toggeleImage(): void {
        this.showImage = !this.showImage;
    }



    //filterby: string = "";

    _filterby: string;
    get filterby(): string {
        return this._filterby;
    }
    set filterby(value: string) {
        this._filterby = value;

        this.filteredProducts = this.filterby ? this.performFilter(this.filterby) : this.Products;
    }



    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.Products.filter((products: IProduct) =>
            products.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

    }


    //Output -- receiving value from child component

    onRatingClickEvent(message: string): void {
        this.pageTitle = 'Product List: ' + message;

    }
}