class Payment{
 

    constructor(type){
     this.type=type;
    }
 processPayment(amount) {
    console.log(`[Service] Processing ${this.type.toUpperCase()} payment of $${amount}`);
  }
}
module.exports=Payment;