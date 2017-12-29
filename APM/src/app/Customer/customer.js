"use strict";
var Customer = (function () {
    function Customer() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.confirmEmail = '';
        this.phone = '';
        this.rating = '';
        this.notificationType = '';
        this.sendCatalog = false;
        this.addressType = '';
        this.address = 'home';
        this.state = '';
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map