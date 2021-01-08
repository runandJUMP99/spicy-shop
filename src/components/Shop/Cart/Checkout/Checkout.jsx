import React, {useEffect, useState} from "react";

import {Paper, Stepper, Step, StepLabel} from "@material-ui/core";

import AddressForm from "./AddressForm/AddressForm";
import Confirmation from "./Confirmation/Confirmation";
import OrderSummary from "./OrderSummary/OrderSummary";
import PaymentForm from "./PaymentForm/PaymentForm";

import classes from "./Checkout.module.css";
import {commerce} from "../../../../lib/commerce";

const Checkout = ({cart, order, captureCheckout, error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const steps = ["Shipping Address", "Payment Details", "Order Summary", "Confirmation"];
    const stepContent = [<AddressForm />, <PaymentForm />, <OrderSummary />, <Confirmation />];

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: "cart"});
            } catch(error) {
                console.log(error);
            }
        }
    }, [cart]);

    function backStep() {
        setActiveStep(prevStep => prevStep - 1);
    }

    function nextStep() {
        setActiveStep(prevStep => prevStep + 1);
    }

    function next(data) {
        setShippingData(data);
        nextStep();
    }

    return (
        <div className={classes.Checkout}>
            <Paper className={classes.Paper}>
                <h4>{steps[activeStep]}</h4>
                <Stepper activeStep={activeStep}>
                    {steps.map(step => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {stepContent[activeStep]}
            </Paper>
        </div>
    );
}

export default Checkout;