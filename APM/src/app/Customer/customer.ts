export class Customer {
    public firstName = '';
    public lastName = '';
    public email = '';
    public confirmEmail = '';
    public phone = '';
    public rating = '';
    public notificationType = '';
    public sendCatalog = false;
    public addressType = '';
    public address = 'home';

    public street1?: string;
    public street2?: string;
    public city?: string;
    public state = '';
    public zip?: string;
}