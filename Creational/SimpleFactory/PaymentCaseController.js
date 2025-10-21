// payment-case-controller.js
function processPayment(type, amount) {
  if (type === 'credit') {
    console.log('Processing CREDIT CARD payment...');
    console.log(`Charging $${amount} to credit card`);
  } else if (type === 'paypal') {
    console.log('Processing PAYPAL payment...');
    console.log(`Transferring $${amount} via PayPal`);
  } else if (type === 'crypto') {
    console.log('Processing CRYPTO payment...');
    console.log(`Sending $${amount} in Bitcoin`);
  } else {
    throw new Error('Unsupported payment type');
  }

  console.log('Payment successful ');
}


processPayment('credit', 100);
processPayment('paypal', 250);
processPayment('crypto', 500);




