import React from 'react';
import { useFlutterwave, closePaymentModal,FlutterWaveButton } from 'flutterwave-react-v3';
import Script from 'next/script';

const flutterwave = () => {
    const config = {
        public_key: 'FLWPUBK-**************************-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'ZMW',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phonenumber: '07064586146',
          name: 'joel ugwumadu',
        },
        customizations: {
          title: 'TERA-STORE',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
    
      const fwConfig = {
        ...config,
        text: 'Pay with Flutterwave!',
        callback: (response) => {
           console.log(response);
          closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {},
      };
    
      return (
        <div className="App">
         <h1>TERA-STORE MOBILE MONEY</h1>
          <FlutterWaveButton {...fwConfig} />
        </div>
      );
};

export default flutterwave;
