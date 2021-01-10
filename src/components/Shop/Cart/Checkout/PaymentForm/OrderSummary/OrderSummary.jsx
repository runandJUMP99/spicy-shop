import React from "react";
import {Typography, List, ListItem, ListItemText} from "@material-ui/core";

import classes from "./OrderSummary.module.css";

const OrderSummary = ({checkoutToken}) => {
    return (
        <div className={classes.OrderSummary}>
            <Typography variant="h6" gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map(item => (
                    <ListItem key={item.name} style={{padding: "5px 0"}}>
                        <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
                        <Typography variant="body2">{item.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: "10px 0"}}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" style={{fontWeight: 700}}>
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>
        </div>
    );
}
export default OrderSummary;