import React from "react";

import classes from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
    return (
        <div className={classes.FeaturedProducts}>
            <h2>Hottest Items</h2>
            <div className={classes.Display}>
                <img src="https://cdn.pixabay.com/photo/2016/11/16/10/26/girl-1828536_960_720.jpg" alt=""/>
                <div className={classes.Text}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus pharetra lacus in suscipit. Morbi mollis finibus est, et convallis.</p>
                    <div className={classes.Controls}>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProducts;