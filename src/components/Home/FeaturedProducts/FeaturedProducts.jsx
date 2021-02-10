import React, {useEffect, useState} from "react";

import Spinner from "../../UI/Spinner/Spinner";

import classes from "./FeaturedProducts.module.css";

const FeaturedProducts = ({products}) => {
    const [fade, setFade] = useState(false);
    const [item, setItem] = useState("");
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        if (products.length > 0) {
            setItem(products[0]);
        }
    }, [products]);

    function handleClick(selection) {
        if (item !== products[selection]) {
            setFade(true);
            setSelected(selection);
    
            setTimeout(() => {
                setItem(products[selection]);
                setFade(false);
            }, 500);
        }
    }

    return (
        <div className={classes.FeaturedProducts}>
            <h2>Hottest Items</h2>
            <p className={classes.Caption}>Browse through some of our top selling items to help bring the spice back into your life!</p>
            <div className={classes.Display}>
                <div className={classes.ImgContainer} style={{opacity: fade ? 0 : 1}}>
                    {!item ? <Spinner color={{border: "4px solid white"}} /> : <img src={item.media.source} alt={item.name} />}
                </div>
                <div className={classes.Text}>
                    <h3>{item && item.name}</h3>
                    <p dangerouslySetInnerHTML={{__html: item && item.description}}></p>
                    <div className={classes.Controls}>
                        <button onClick={() => handleClick(0)} style={{opacity: selected === 0 && 1}}></button>
                        <button onClick={() => handleClick(1)} style={{opacity: selected === 1 && 1}}></button>
                        <button onClick={() => handleClick(2)} style={{opacity: selected === 2 && 1}}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProducts;