import React from "react";
import {useFormContext, Controller} from "react-hook-form";

import {TextField, Grid} from "@material-ui/core";

const Input = ({name, label, required}) => {
    const {control} = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                as={TextField}
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