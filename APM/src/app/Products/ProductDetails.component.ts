import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { IProduct } from './Product'
import { ProductService } from './Product.Service'

@Component({
    templateUrl:'./ProductDetails.component.html'

})
export class ProductDetailsComponent {

    product: IProduct;

    constructor(private _service: ProductService, private _router: Router, private _activateRoute: ActivatedRoute) { }

    ngOnInit() {
        let id: number = this._activateRoute.snapshot.params["Id"];
        this._service.getProductByID(id).subscribe(p => this.product = p);
    }

    onBack() {
        this._router.navigate(['/products']);
    }
}