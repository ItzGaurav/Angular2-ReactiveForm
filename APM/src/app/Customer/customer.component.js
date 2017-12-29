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
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime"); // to give some time to user to enter emial address before showing validation
var customer_1 = require("./customer");
//No need to import  FormControl if we are using FormBuilder
//function ratingRange(AC: AbstractControl): { [key: string]: boolean }|null { // custom validation
//    if (AC.value != undefined && (isNaN(AC.value) || AC.value < 1 || AC.value > 5)) {
//        return { 'range': true };
//    }
//    return null;
//}
// Some more
function ratingRange(min, max) {
    return function (AC) {
        if (AC.value != undefined && (isNaN(AC.value) || AC.value < min || AC.value > max)) {
            return { 'range': true };
        }
        return null;
    };
}
function emailMatcher(c) {
    var emailControl = c.get('email');
    var confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}
var customerComponent = (function () {
    function customerComponent(fb) {
        this.fb = fb;
        this.customer = new customer_1.Customer();
        this.validationMessagesFN = {
            required: 'First Name is reruired.',
            minlength: 'First Name must be longer than 3 character.'
        };
        this.validationMessages = {
            required: 'Please enter your email address.',
            pattern: 'Please enter a valid email address.'
        };
    }
    Object.defineProperty(customerComponent.prototype, "addresses", {
        get: function () {
            return this.customerForm.get('addresses'); //<FormArray> casting
        },
        enumerable: true,
        configurable: true
    });
    //FormBuilder is a class used to create Reactive class.  //Its like a factory that create FormGroup and FormControl for US
    customerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            lastName: [''],
            emailGroup: this.fb.group({
                email: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
                confirmEmail: ['', forms_1.Validators.required],
            }, { validator: emailMatcher }),
            phone: '',
            notificationType: 'email',
            // rating: ['', ratingRange],
            rating: ['', ratingRange(1, 10)],
            sendCatalog: { value: true, disabled: false },
            addresses: this.fb.array([this.buildAddress()]) //using formArray to create multiple time address -- created form group by method
        });
        //this.customerForm = new FormGroup({
        //    firstName: new FormControl(),
        //    lastName: new FormControl(),
        //    email: new FormControl(),
        //    sendCatalog: new FormControl(true)
        //});
        //Watching & Reacting
        this.customerForm.get('notificationType').valueChanges.subscribe(function (val) { return _this.setNotification(val); });
        this.customerForm.get('firstName').valueChanges.subscribe(function (val) { return _this.setMessageFN(val); });
        var emailControl = this.customerForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) {
            return _this.setMessage(emailControl);
        });
    };
    customerComponent.prototype.buildAddress = function () {
        return this.fb.group({
            addressType: 'home',
            street1: '',
            street2: '',
            city: '',
            state: '',
            zip: ''
        });
    };
    customerComponent.prototype.addAddress = function () {
        this.addresses.push(this.buildAddress());
    };
    customerComponent.prototype.setNotification = function (notifyVia) {
        var phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(forms_1.Validators.required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    customerComponent.prototype.setMessageFN = function (c) {
        var _this = this;
        this.firstNameMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.firstNameMessage = Object.keys(c.errors).map(function (key) {
                return _this.validationMessagesFN[key];
            }).join(' ');
        }
    };
    customerComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) {
                return _this.validationMessages[key];
            }).join(' ');
        }
    };
    customerComponent.prototype.save = function () {
        console.log(this.customerForm);
    };
    customerComponent.prototype.TestDataSetValuePatchValue = function () {
        // SetValue- must have to supply all value otheriwse will get error-  Must supply a value for form control with name: 'sendCatalog'.
        this.customerForm.setValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            email: 'jack@gmail.com',
            sendCatalog: true
        });
    };
    return customerComponent;
}());
customerComponent = __decorate([
    core_1.Component({
        templateUrl: './customer.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], customerComponent);
exports.customerComponent = customerComponent;
//# sourceMappingURL=customer.component.js.map