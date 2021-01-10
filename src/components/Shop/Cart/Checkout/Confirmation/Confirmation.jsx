import React from "react";
import {Link} from "react-router-dom";

import {Button, Divider, Typography} from "@material-ui/core";

import classes from "./Confirmation.module.css";

const Confirmation = ({error, order}) => {
    let content = "Loading...";

    if (order.customer) {
        content = (
            <>
                <div>
                    <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
                    <Divider className={classes.divider} />
                    <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
                </div>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
            </>
        );
    } else if (error) {
        content = (
            <>
                <Typography variant="h5">Error: {error}</Typography>
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