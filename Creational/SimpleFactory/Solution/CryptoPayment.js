const Payment = require('./Payment');

class CryptoPayment extends Payment {
    constructor() {
    super('crypto'); // type = crypto
  }

}
module.exports=CryptoPayment;