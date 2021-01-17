import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import classes from "./Product.module.css";

const Product = ({product}) => {
    const [mouseOver, setMouseOver] = useState(false);

    function handleMouseEnter() {
        setMouseOver(true);
    }
    
    function handleMouseLeave() {
        setMouseOver(false);
    }

    return (
        <div className={classes.Product} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={classes.Overlay} style={{opacity: !mouseOver && 0}}>
                <h2>{product.name}</h2>
                <button><NavLink to="/shop">Shop</NavLink></button>
            </div>
            <img src={product.media.source} alt={product.name} />
        </div>
    );
}

export default Product;