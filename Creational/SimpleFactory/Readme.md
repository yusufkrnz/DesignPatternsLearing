# 🏭 Simple Factory Pattern

**Simple Factory Pattern** ile nesne oluşturma mantığını merkezi bir factory sınıfına taşıyarak kod tekrarını azaltır ve genişletilebilirliği artırır.

## 🎯 Problem ve Çözüm

### ❌ Geleneksel Yaklaşım
```javascript
function processPayment(type, amount) {
  if (type === 'credit') {
    console.log('Processing CREDIT CARD payment...');
  } else if (type === 'paypal') {
    console.log('Processing PAYPAL payment...');
  } else if (type === 'crypto') {
    console.log('Processing CRYPTO payment...');
  }
}
```

**Sorunlar:** Kod tekrarı, sıkı bağlılık, test zorluğu

### ✅ Factory Pattern
```javascript
const factory = new PaymentFactory();
function processPayment(type, amount) {
    const payment = factory.create(type);
    payment.processPayment(amount);
}
```

**Avantajlar:** Merkezi nesne oluşturma, kolay genişletilebilirlik

## 🏗️ Proje Yapısı

```
SimpleFactory/
├── PaymentCaseController.js          # Geleneksel yaklaşım
├── NewPaymentController.js           # Factory pattern
├── Solution/
│   ├── Payment.js                    # Base sınıf
│   ├── PaymentFactory.js             # Factory sınıfı
│   ├── CreditPayment.js              # Concrete implementation
│   ├── PayPalPayment.js              # Concrete implementation
│   └── CryptoPayment.js              # Concrete implementation
└── README.md
```

## 🚀 Kullanım

```bash
# Geleneksel yaklaşım
node PaymentCaseController.js

# Factory pattern
node NewPaymentController.js
```

## 🔧 Yeni Ödeme Türü Ekleme

1. **Yeni sınıf oluştur**
2. **Payment sınıfından extend et**
3. **PaymentFactory'e ekle**

```javascript
class BankTransferPayment extends Payment {
    constructor() {
        super('banktransfer');
    }
}

// Factory'e ekle
this.paymentMap = {
    credit: CreditPayment,
    paypal: PayPalPayment,
    crypto: CryptoPayment,
    banktransfer: BankTransferPayment
};
```

## 📚 Faydalar

✅ **Genişletilebilirlik**: Yeni ödeme türleri kolayca eklenebilir  
✅ **Bakım Kolaylığı**: Merkezi nesne oluşturma  
✅ **Test Edilebilirlik**: Her sınıf bağımsız test edilebilir  
✅ **Kod Tekrarı Azalması**: DRY prensibi uygulanır
