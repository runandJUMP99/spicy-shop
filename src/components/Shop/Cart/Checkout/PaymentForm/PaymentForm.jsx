import React from "react";

import {Typography, Button} from "@material-ui/core";
import {Elements, CardElement, ElementsConsumer} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";

import OrderSummary from "../OrderSummary/OrderSummary";

import classes from "./PaymentForm.module.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({checkoutToken, backStep, shippingData, captureCheckout, nextStep}) => {
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const {error, paymentMethod} = await stripe.createPaymentMethod({type: "card", card: cardElement});

        if (error) {
            console.log(error);
        } else {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: {
                    firstname: shippingData.firstName,
                    lastname: shippingData.lastName,
                    email: shippingData.email
                },
                shipping: {
                    name: "Primary",
                    street: shippingData.address,
                    town_city: shippingData.city,
                    county_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountry
                },
                fulfillment: {
                    shipping_method: shippingData.shippingOption
                },
                payment: {
                    gateway: "stripe",
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
            };

            captureCheckout(checkoutToken.id, orderData);
            nextStep();
        }
    }

    return (
        <div className={classes.PaymentForm}>
            <OrderSummary checkoutToken={checkoutToken} />
            <Typography variant="h6" gutterBottom style={{margin: "20px 0"}}>Enter Your Payment Information</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements, stripe}) => (
                        <form onSubmit={(event) => handleSubmit(event, elements, stripe)}>
                            <CardElement />
                            <br />       
                            <br />
                            <div className={classes.Buttons}>
                                <Button variant="outlined" onClick={backStep}>Back</Button>
                                <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>       
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </div>
    );
}
export default PaymentForm;