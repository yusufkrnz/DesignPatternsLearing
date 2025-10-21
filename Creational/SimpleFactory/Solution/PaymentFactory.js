const CreditPayment=require('./CreditPayment');
const PayPalPayment=require('./PayPalPayment');
const CryptoPayment=require('./CryptoPayment');


class PaymentFactory{
    constructor(){
        // tanımlama yapmadan direkt yazmışım,
        this.paymentMap={
        credit:CreditPayment,
        paypal:PayPalPayment,
        crypto:CryptoPayment,
    };
    }

createPayment(type){
    console.log(`[Factory] create(type="${type}")`);
    const PaymentClass=this.paymentMap[type];

    if(!PaymentClass){
        throw new Error(`Unsupported payment type: ${type}`);
    }
    return new PaymentClass();
 }
}
module.exports=PaymentFactory;