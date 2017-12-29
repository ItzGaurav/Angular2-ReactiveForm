import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms'
import 'rxjs/add/operator/debounceTime' // to give some time to user to enter emial address before showing validation

import { Customer } from './customer'


//No need to import  FormControl if we are using FormBuilder


//function ratingRange(AC: AbstractControl): { [key: string]: boolean }|null { // custom validation
//    if (AC.value != undefined && (isNaN(AC.value) || AC.value < 1 || AC.value > 5)) {
//        return { 'range': true };
//    }
//    return null;
//}

// Some more
function ratingRange(min: number, max: number): ValidatorFn {  // Factory function

    return (AC: AbstractControl): { [key: string]: boolean } | null => { // custom validation
        if (AC.value != undefined && (isNaN(AC.value) || AC.value < min || AC.value > max)) {
            return { 'range': true };
        }
        return null;
    }

}

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');

    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }

    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}


@Component({
    templateUrl: './customer.component.html'
})
export class customerComponent implements OnInit {
    customerForm: FormGroup;
    customer: Customer = new Customer();
    firstNameMessage: string;
    emailMessage: string;

    private validationMessagesFN = {
        required: 'First Name is reruired.',
        minlength: 'First Name must be longer than 3 character.'
    };
    private validationMessages = {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address.'
    };


    constructor(private fb: FormBuilder) { }

    get addresses(): FormArray {
        return <FormArray>this.customerForm.get('addresses'); //<FormArray> casting
    }




    //FormBuilder is a class used to create Reactive class.  //Its like a factory that create FormGroup and FormControl for US


    ngOnInit(): void {

        this.customerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]], // Validators class use
            lastName: [''],
            emailGroup: this.fb.group({
                email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
                confirmEmail: ['', Validators.required],
            }, { validator: emailMatcher }),

            phone: '',
            notificationType: 'email',
            // rating: ['', ratingRange],
            rating: ['', ratingRange(1, 10)],
            sendCatalog: { value: true, disabled: false },
            addresses:this.fb.array([this.buildAddress()]) //using formArray to create multiple time address -- created form group by method

        })


        //this.customerForm = new FormGroup({
        //    firstName: new FormControl(),
        //    lastName: new FormControl(),
        //    email: new FormControl(),
        //    sendCatalog: new FormControl(true)
        //});


        //Watching & Reacting
        this.customerForm.get('notificationType').valueChanges.subscribe(val => this.setNotification(val));

        this.customerForm.get('firstName').valueChanges.subscribe(val => this.setMessageFN(val));

        const emailControl = this.customerForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(value =>
            this.setMessage(emailControl));

    }

    buildAddress(): FormGroup {
        return this.fb.group({
            addressType: 'home',
            street1: '',
            street2: '',
            city: '',
            state: '',
            zip: ''
        });
    }

    addAddress(): void {
        this.addresses.push(this.buildAddress());
    }


    setNotification(notifyVia: string): void {
        const phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();

    }

    setMessageFN(c: AbstractControl): void {
        this.firstNameMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.firstNameMessage = Object.keys(c.errors).map(key =>
                this.validationMessagesFN[key]).join(' ');
        }
    }

    setMessage(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.validationMessages[key]).join(' ');
        }
    }






    save() {
        console.log(this.customerForm);
    }

    TestDataSetValuePatchValue() {
        // SetValue- must have to supply all value otheriwse will get error-  Must supply a value for form control with name: 'sendCatalog'.
        this.customerForm.setValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            email: 'jack@gmail.com',
            sendCatalog: true

        });

    }

}