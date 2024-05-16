import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductProfile from "../components/ProductProfile";


const Product = ({slug,product}) => {
    useEffect(() => {
        console.log(product);
    }, [product]);
    return (
        <div style={{ backgroundColor: "#AEFFFE", padding: "20px", width:"100%", height:"100%" }}>
            <Header />
            <hr style={{ width: "100%", borderTop: "3px solid black" }} />
            <ProductProfile product={product}/>
        </div>
    );
};

export default Product;
