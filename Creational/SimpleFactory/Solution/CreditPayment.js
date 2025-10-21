const Payment = require("./Payment");



class CreditPayment extends Payment{
     constructor() {
    super('credit'); // type = credit
  }
}

module.exports=CreditPayment;