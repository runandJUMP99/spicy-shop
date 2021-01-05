import React, {useState} from "react";

import classes from "./Product.module.css";

const Product = () => {
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
                <button>Shop</button>
            </div>
            <img src="https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_960_720.jpg" alt=""/>
        </div>
    );
}

export default Product;