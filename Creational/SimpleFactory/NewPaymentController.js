const PaymentFactory=require('./Solution/PaymentFactory');


const factory = new PaymentFactory();

function processPayment(type,amount){
    const payment=factory.createPayment(type);
    payment.processPayment(amount);
    console.log('işlem başarılı');
}

processPayment('credit',100);
processPayment('paypal',300);
processPayment('crypto',5000);