
const Payment = require('./Payment');

class PayPalPayment extends Payment{
     constructor() {
    super('paypal'); // type = paypal
  }

}
module.exports=PayPalPayment;