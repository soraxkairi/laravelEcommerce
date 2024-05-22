import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductProfile from "../components/ProductProfile";
import { Context } from "../context/context";

const Product = ({ slug, product }) => {
    const [getUserCart, setUserCart] = useState();
    const [globalState, setGlobalState] = useState();

    useEffect(() => {
        if (getUserCart) {
            console.log(getUserCart);
        }
    }, [getUserCart]);

    // const contextValue = {
    //     cartUpdateValue
    // }

    const globalStateHandler = (data) => {
        setGlobalState(globalState => ({
          ...globalState,
          ...data
        }));
      }

    return (
        <Context.Provider value={{globalState,globalStateHandler}}>
            <div
                style={{
                    backgroundColor: "#AEFFFE",
                    padding: "20px",
                    width: "100%",
                    height: "100%",
                }}
            >
                <Header userCart={getUserCart} />
                <hr style={{ width: "100%", borderTop: "3px solid black" }} />
                <ProductProfile product={product} userCart={setUserCart} />
            </div>
        </Context.Provider>
    );
};

export default Product;
