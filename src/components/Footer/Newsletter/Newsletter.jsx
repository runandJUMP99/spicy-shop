import React, {useState} from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";

import classes from "./Newsletter.module.css";

const Newsletter = () => {
    const [formData, setFormData] = useState({email: ""});

    function handleSubmit(event, formData, subscribe) {
        event.preventDefault();
        subscribe(formData);
    }

    return (
        <div className={classes.Newsletter}>
            <h3>Sign up to our mailing list to receive updates on our newest items!</h3>
            <form action={process.env.REACT_APP_MAILCHIMP_URL} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                    <label htmlFor="mce-EMAIL">Subscribe</label>
                    <input type="email" value={formData.email} name="EMAIL" id="mce-EMAIL" placeholder="Email Address" onChange={(event) => setFormData({email: event.target.value})} required />
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_b747bfeee8f7f23b0569cc8ac_a2c7cb8f1d" tabIndex="-1" value="" /></div>
                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" /></div>
                </div>
            </form>
        </div>
    );
}
export default Newsletter;