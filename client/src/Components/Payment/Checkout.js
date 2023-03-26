import axios from 'axios';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Checkout = ({ name, description, amount }) => {
    const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post("http://localhost:7000/api/checkout/payment",
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount:2000
    })
    .then(successPayment)
    .catch(errorPayment);



    return (
    <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
    description="your total is 20">
        <button className='button'>Pay Now</button>
    </StripeCheckout>
    );
};

export default Checkout;