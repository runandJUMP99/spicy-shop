import React, {useEffect, useState} from "react";

import Products from "./Products/Products";

import classes from "./Shop.module.css";
import {commerce} from "../../lib/commerce";

const Shop = ({addToCart}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    return (
        <div className={classes.Products}>
            <Products addToCart={addToCart} products={products} />
        </div>
    );
}

export default Shop;