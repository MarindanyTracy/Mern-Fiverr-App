import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Pay.scss';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import  newRequest from "../../utils/newRequest";
import CheckoutForm from '../../components/checkoutForm/CheckOutForm';

const stripePromise = loadStripe("pk_test_51Mf0CIHoKQ81bd8KyjE81RUpk5s7pVK32Z6a7ATllowxTE5RmxblpLcnCJgx6VP8FYG5vCwVIWWKksvUPL6Hmj2100X7S8u8XE");

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
        setClientSecret(res.data.clientSecret)
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  },[]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  
  return (
    <div className='pay'>
         {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Pay
