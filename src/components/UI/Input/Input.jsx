import React from "react";
import {useFormContext, Controller} from "react-hook-form";

import {TextField, Grid} from "@material-ui/core";

const Input = ({label, multiline, name, required, size, variant}) => {
    const {control} = useFormContext();
    return (
        <Grid item xs={12} sm={size ? size : 6}>
            <Controller 
                as={<TextField multiline={multiline} rows={4} variant={variant}/>}
                control={control}
                defaultValue=""
                fullWidth
                name={name}
                label={label}
                required={required}
            />
        </Grid>
    );
}

export default Input;