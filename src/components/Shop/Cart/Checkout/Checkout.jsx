import React, {useEffect, useState} from "react";

import {Paper, Stepper, Step, StepLabel} from "@material-ui/core";

import AddressForm from "./AddressForm/AddressForm";
import Confirmation from "./Confirmation/Confirmation";
import PaymentForm from "./PaymentForm/PaymentForm";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./Checkout.module.css";
import {commerce} from "../../../../lib/commerce";

const Checkout = ({cart, order, captureCheckout, error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const steps = ["Shipping Address", "Payment Details", "Confirmation"];
    const stepContent = [
        <AddressForm checkoutToken={checkoutToken} next={next} />,
        <PaymentForm backStep={backStep} captureCheckout={captureCheckout} checkoutToken={checkoutToken} nextStep={nextStep} shippingData={shippingData} />,
        <Confirmation checkoutToken={checkoutToken} error={error} order={order} />
    ];

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: "cart"});
                setCheckoutToken(token);
            } catch(error) {
                console.log(error);
            }
        }

        if (cart.line_items.length > 0) {
            generateToken();
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
                <div className={classes.Form}>
                    {checkoutToken ? stepContent[activeStep] : <Spinner />}
                </div>
            </Paper>
        </div>
    );
}

export default Checkout;