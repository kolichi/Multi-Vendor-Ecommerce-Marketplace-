import React, { useState } from 'react';
import { Radio, Modal } from 'antd';
// import FlutterComp from './flutterHook.js';
import Flutterwave from '~/pages/flutterwave';
import inline from './inline flutter';

import useScript from './hookinline';
import { useRouter } from 'next/router';

export function makePayment() {
    FlutterwaveCheckout({
        public_key: 'FLWPUBK_TEST-SANDBOXDEMOKEY-X',
        tx_ref: 'titanic-48981487343MDI0NzMx',
        amount: 54600,
        currency: 'ZMW',
        payment_options: 'card, banktransfer, ussd',
        redirect_url: 'https://glaciers.titanic.com/handle-flutterwave-payment',
        meta: {
            consumer_id: 23,
            consumer_mac: '92a3-912ba-1192a',
        },
        customer: {
            email: 'rose@unsinkableship.com',
            phone_number: '08102909304',
            name: 'Rose DeWitt Bukater',
        },
        customizations: {
            title: 'The Titanic Store',
            description: 'Payment for an awesome cruise',
            logo:
                'https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg',
        },
    });
}

const ModulePaymentMethods = () => {
    const Router = useRouter();
    const [isQuickView, setIsQuickView] = useState(false);
    const [method, setMethod] = useState(1);

    function handleChangeMethod(e) {
        setMethod(e.target.value); //e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault();
        Router.push('/account/payment-success');
    }

    const flutterBuy = (e) => {
        e.preventDefault();
        setIsQuickView(true);
    };

    const handleHideQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(false);
    };

    return (
        <>
            <h4>Payment Methods</h4>
            <div className="ps-block--payment-method">
                <div className="ps-block__header">
                    <Radio.Group
                        onChange={(e) => handleChangeMethod(e)}
                        value={method}>
                        <Radio value={1}>Visa / Master Card </Radio>
                        <Radio value={2}> Mobile Money </Radio>
                        <Radio value={3}>Paypal</Radio>
                    </Radio.Group>
                </div>
                <div className="ps-block__content">
                    {(function () {
                        if (method === 1) {
                            return (
                                <div className="ps-block__tab">
                                    <div className="form-group">
                                        <label>Card Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Card Holders</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4 col-4">
                                            <div className="form-group">
                                                <label>
                                                    Expiration Date (MM/YY)
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="01/21"
                                                />
                                            </div>
                                        </div>
                                        <div className=" col-sm-4 col-4">
                                            <div className="form-group">
                                                <label>CVV</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="button"
                                            className="ps-btn ps-btn--fullwidth"
                                            onClick={(e) => handleSubmit(e)}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            );
                        }

                        if (method === 2) {
                            return (
                                <>
                                    <button className="ps-btn" type="button" onClick={flutterBuy}>
                                        procced
                                    </button>

                                    <Modal
                                        centered
                                        footer={null}
                                        width={1024}
                                        onCancel={(e) => handleHideQuickView(e)}
                                        visible={isQuickView}
                                        closeIcon={
                                            <i className="icon icon-cross2"></i>
                                        }>
                                            
                                        <Flutterwave />
                                    </Modal>
                                </>

                                // <div style="display:absolute">

                                // <Flutterwave />
                                // </div>
                            );
                        }

                        if (method === 3) {
                            //  const MyComponent = props => {
                            //         useScript("https://checkout.flutterwave.com/v3.js");

                            //         // rest of your component
                            //       }
                            return (
                                <div className="ps-block__tab">
                                    <a
                                        type="button"
                                        id="start-payment-button"
                                        onclick={inline}
                                        className="ps-btn">
                                        Process with Paypal

                                    </a>
                                </div>
                            );
                        }
                    })()}
                </div>
            </div>
        </>
    );
};

export default ModulePaymentMethods;
