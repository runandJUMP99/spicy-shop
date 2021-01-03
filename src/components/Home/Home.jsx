import React from "react";

import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Jumbotron from "./Jumbotron/Jumbotron";

import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Jumbotron />
            <FeaturedProducts />
        </div>
    );
}

export default Home;