import React, {useState} from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";

import classes from "./Newsletter.module.css";

const Newsletter = () => {
    const [formData, setFormData] = useState({EMAIL: ""});

    function handleSubmit(event, subscribe) {
        event.preventDefault();
        
        subscribe(formData);
        setFormData({EMAIL: ""});
    }

    return (
        <div className={classes.Newsletter}>
            <h3>Sign up to our mailing list to receive updates on our newest items!</h3>
            <MailchimpSubscribe 
                url={process.env.REACT_APP_MAILCHIMP_URL}
                render={({ subscribe, status, message }) => (
                    <div className={classes.Form}>
                        <form onSubmit={(event) => handleSubmit(event, subscribe)}>
                            <input
                                onChange={(event) => setFormData({EMAIL: event.target.value})}
                                placeholder="Your Email"
                                type="email"
                                value={formData.EMAIL}
                            />
                            <button>Sign Up</button>
                        </form>
                        {status === "sending" && <div>Sending...</div>}
                        {status === "error" && <div>Error processing request. Please try again or use a different email.</div>}
                        {status === "success" && <div>Thank you for signing up!</div>}
                    </div>
                )}
            />
        </div>
    );
}
export default Newsletter;