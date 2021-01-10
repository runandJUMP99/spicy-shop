import React from "react";
import {useForm, FormProvider} from "react-hook-form";

import {Grid, Typography} from "@material-ui/core";

// import ReCAPTCHA from "react-google-recaptcha";
// import emailjs from "emailjs-com";

import Input from "../UI/Input/Input";

import classes from "./Contact.module.css";

const ContactUs = () => {
    const methods = useForm();

    // emailjs.send("cthru_inspections", "template_j8u25if", formData, process.env.REACT_APP_EMAILJS_KEY)
    //     .then(res => {
    //         const updatedMessageForm = {
    //             ...messageForm
    //         };

    //         for (let key in updatedMessageForm) {
    //             updatedMessageForm[key].value = "";
    //         }

    //         setMessageForm(updatedMessageForm);
    //         setMessage("Your message has been delivered. Thank you!");
    //         setMessageSent(true);
    //         setIsLoading(false);
    //     }, err => {
    //         console.log('FAILED...', err);

    //         const updatedMessageForm = {
    //             ...messageForm
    //         };

    //         for (let key in updatedMessageForm) {
    //             updatedMessageForm[key].value = "";
    //         }

    //         setMessageForm(updatedMessageForm);
    //         setMessage("Uh oh! There was an error delivering your message. Please try again.");
    //         setIsLoading(false);
    //         setFormIsValid(false);
    //         setCaptcha(false);
    //     });
    // <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleCaptcha} />

    function handleSubmit(data) {
        console.log(data);  
    }

    return (
        <div className={classes.ContactUs}>
            <Typography variant="h6" gutterBottom>Enter Your Shipping Information</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => handleSubmit(data))}>
                    <Grid container spacing={3}>
                        <Input required name="name" label="Name" size={12} variant="filled" />
                        <Input required name="email" label="Email" size={12} variant="filled" />
                        <Input required name="phone" label="Phone Number" size={12} variant="filled" />
                        <Input required name="message" label="Message" multiline={true} size={12} variant="filled" />
                    </Grid>
                    <button>Send</button>
                </form>
            </FormProvider>
        </div>
    );
}

export default ContactUs;