import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useForm, FormProvider} from "react-hook-form";

import {InputLabel, Select, MenuItem, Button, Grid, Typography} from "@material-ui/core";

import Input from "../../../../UI/Input/Input";

import classes from "./AddressForm.module.css";
import {commerce} from "../../../../../lib/commerce";

const AddressForm = ({checkoutToken, next}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState("");
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState("");
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState("");
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([key, value]) => ({id: key, label: value}));
    const subdivisions = Object.entries(shippingSubdivisions).map(([key, value]) => ({id: key, label: value}));
    const options = shippingOptions.map(shippingOption => ({
        id: shippingOption.id, 
        label: `${shippingOption.description} - (${shippingOption.price.formatted_with_symbol})`
    }));

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);

    useEffect(() => {
        if (shippingCountry) {
            fetchSubdivisions(shippingCountry);
        }
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) {
            fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
        }
    }, [shippingSubdivision]);

    const fetchShippingCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivisions = async (countryCode) => {
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});

        setShippingOptions(options);
        setShippingOption(options[0].id);
    }

    return (
        <div className={classes.AddressForm}>
            <Typography variant="h6" gutterBottom>Enter Your Shipping Information</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({...data, shippingCountry, shippingSubdivision, shippingOption}))}>
                    <Grid container spacing={3}>
                        <Input required name="firstName" label="First Name" />
                        <Input required name="lastName" label="Last Name" />
                        <Input required name="address" label="Address" />
                        <Input required name="email" label="Email" />
                        <Input required name="city" label="City" />
                        <Input required name="zip" label="Zip / Postal Code" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(event) => setShippingCountry(event.target.value)} defaultValue="">
                                {countries.map(country => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(event) => setShippingSubdivision(event.target.value)} defaultValue="">
                                {subdivisions.map(subdivision => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(event) => setShippingOption(event.target.value)} defaultValue="">
                                {options.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}
export default AddressForm;