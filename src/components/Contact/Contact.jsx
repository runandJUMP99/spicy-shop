import React, {useState} from "react";

// import ReCAPTCHA from "react-google-recaptcha";
// import emailjs from "emailjs-com";

import Input from "../UI/Input/Input";
import Spinner from "../UI/Spinner/Spinner";

import classes from "./Contact.module.css";

const ContactUs = () => {
    const [messageForm, setMessageForm] = useState({
        name: {
            elementType: "input",
            elementConfig:{
                placeholder: "Your Name",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: "input",
            elementConfig:{
                placeholder: "Email",
                type: "email"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        phone: {
            elementType: "input",
            elementConfig:{
                placeholder: "Phone Number",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        message: {
            elementType: 'textarea',
            elementConfig: {
                placeholder: 'Type your message here...',
                rows: 4
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
    });

    const [message, setMessage] = useState("Enter your Contact Information");
    const [formIsValid, setFormIsValid] = useState(false);
    const [captcha, setCaptcha] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = {};
        
        for (let formElementIdentifier in messageForm) {
            formData[formElementIdentifier] = messageForm[formElementIdentifier].value;
        }

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
    }

    const checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        return isValid;
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedMessageForm = {
            ...messageForm
        }
        
        const updatedFormElement = {
            ...updatedMessageForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedMessageForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;

        for (let inputIdentifier in updatedMessageForm) {
            formIsValid = updatedMessageForm[inputIdentifier].valid && formIsValid && captcha;
        }
        setMessageForm(updatedMessageForm);
        setFormIsValid(formIsValid);
    }

    const handleCaptcha = () => {
        setCaptcha(true);

        let formIsValid = true;

        for (let key in messageForm) {
            formIsValid = messageForm[key].valid && formIsValid;
        }

        setFormIsValid(formIsValid);
    }

    const formElementsArray = [];

    for (let key in messageForm) {
        formElementsArray.push({
            id: key,
            config: messageForm[key]
        });
    }

    let form = <Spinner />

    if (messageSent && !isLoading) {
        form = <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/sent.png?alt=media&token=cc258008-f3f1-4219-aba7-ba6cae989daf" alt="Message Sent" />
    } else if (!messageSent && !isLoading) {
        form = (
            <form onSubmit={handleSubmit}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => inputChangedHandler(event, formElement.id)}
                        value={formElement.config.value}/>
                ))}
                <div className={classes.Captcha}>
                    {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleCaptcha} /> */}
                </div>
                <button disabled={!formIsValid}>Submit</button>
            </form>
        );
    }

    return (
        <div className={classes.ContactUs}>
            <h4>{message}</h4>
            {form}
        </div>
    );
}

export default ContactUs;