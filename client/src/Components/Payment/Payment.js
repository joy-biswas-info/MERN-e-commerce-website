import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {

    const [stripeToken,setStripeToken]= useState(null)

    const onToken=(token)=>{
        setStripeToken(token);
    };

    useEffect(() => {
      const makeRequest = async ()=>{

        try {
            const res = await axios.post("http://localhost:7000/api/checkout/payment",{
                source:stripeToken.id,
                amount:2000,
                currency:"USD",
                description:"No Payment",
            });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
      };
      stripeToken && makeRequest();
    }, [stripeToken])
    




    return (
        <div>
            <StripeCheckout
                name='Joy Shop'
                image='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9f97425c956ae56494390f595019869a-1677484348332/2c3c5d65-e9dc-4e72-b01e-7ad54a5a8648.jpeg'
                billingAddress
                shippingAddress
                description='Your Total is 50'
                amount={2000}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
                token={onToken}
            >
                <button className='button'>Pay Now</button>
            </StripeCheckout>
        </div>
    );
};

export default Payment;