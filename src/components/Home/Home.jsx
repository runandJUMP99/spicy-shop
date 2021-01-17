import React from "react";

import AboutUs from "./AboutUs/AboutUs";
import CTASection from "../CTASection/CTASection";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Jumbotron from "./Jumbotron/Jumbotron";
import NewProducts from "./NewProducts/NewProducts";

import classes from "./Home.module.css";

const Home = ({products}) => {
    return (
        <div className={classes.Home}>
            <Jumbotron />
            <FeaturedProducts products={products} />
            <AboutUs />
            <NewProducts products={products} />
            <CTASection />
        </div>
    );
}

export default Home;