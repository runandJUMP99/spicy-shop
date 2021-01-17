import React from "react";
import {Link} from "react-router-dom";

import {Button, Divider, Typography} from "@material-ui/core";

import OrderSummary from "../OrderSummary/OrderSummary";
import Spinner from "../../../../UI/Spinner/Spinner";

import classes from "./Confirmation.module.css";

const Confirmation = ({checkoutToken, error, order}) => {
    let content = <Spinner />;

    if (order.customer) {
        content = (
            <>
                <div>
                    <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
                    <Divider className={classes.divider} />
                    <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
                </div>
                <br />
                <OrderSummary checkoutToken={checkoutToken} />
                <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
            </>
        );
    } else if (error) {
        content = (
            <>
                <Typography variant="h5">Uh oh, Something want wrong! Please go back and try again.</Typography>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
            </>
        );
    }

    return (
        <div className={classes.Confirmation}>
            {content}
        </div>
    );
}

export default Confirmation;