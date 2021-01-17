import React, {useEffect, useState} from "react";

import Product from "./Product/Product";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./NewProducts.module.css";

const NewProducts = ({products}) => {
    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            setNewProducts([
                products[products.length - 1],
                products[products.length - 2],
                products[products.length - 3]
            ]);
        }
    }, [products]);
    
    return (
        <div className={classes.NewProducts}>
            <h2>New Creations</h2>
            <div className={classes.Products}>
                {newProducts.length === 0 
                    ? <Spinner /> 
                    : newProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
}

export default NewProducts;