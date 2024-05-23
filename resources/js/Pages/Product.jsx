import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductProfile from "../components/ProductProfile";
import { Context } from "../context/context";
import Modal from "@mui/material/Modal";
import img1 from "../images/model1.jpg";

const Product = ({ slug, product }) => {
    const [getUserCart, setUserCart] = useState();
    const [globalState, setGlobalState] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [finalPrice,setFinalPrice] = useState(0);
    useEffect(() => {
        if (globalState) {
            if(globalState.cartList.cart)
                {
                    getCart();
                }
        }
    }, [globalState]);

    // const contextValue = {
    //     cartUpdateValue
    // }

    const globalStateHandler = (data) => {
        setGlobalState(globalState => ({
          ...globalState,
          ...data
        }));
      }


    useEffect(() => {
        getCart();
    },[])

    const getCart = async () => {
        try {
            const response = await fetch("/cart");
            const result = await response.json();
            setUserCart(result);
            getPrice(result);
        } catch (error) {
            console.error('Error fetching cart:', error);
            throw error;
        }
    };

    const getPrice = (products) => {
        let totalPrice = 0;
        products.cart.forEach(element => {
            totalPrice += Number(element.products.price);
        });
        setFinalPrice(totalPrice.toFixed(2));
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
                <Header userCart={getUserCart} toggleModal={setOpenModal} />
                <hr style={{ width: "100%", borderTop: "3px solid black" }} />
                <ProductProfile product={product} userCart={setUserCart} openModal={setOpenModal}/>
            </div>

            <Modal
                    open={openModal}
                    onClose={() => toggleModal(false)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: "100%",
                        width: "400px",
                        height: "100%",
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        overflowY: "scroll",
                        boxShadow: "0px 0px 15px rgba(0, 0, 0, 1)",
                        padding: "0", // Remove padding here
                        transform: "translateX(-100%)",
                    }}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                        backgroundColor: '#FFFFFF',
                    }}>
                        <div style={{ textAlign: "left", padding: "30px" }}>
                            <p style={{ fontSize: '35px' }}>Cart</p>
                            <hr />
                            {getUserCart !== undefined && getUserCart.cart.map(item => (
                                <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',padding: '10px 0' }}>
                                    <img src={img1} alt={item.product_name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                                    <div>
                                        <p>{item.products.product_name}</p>
                                        <p>€{item.products.price}</p>
                                    </div>
                                    <button onClick={() => {console.log('works')}}>
                                        Eliminar
                                    </button>
                                </div>
                            ))}
                            {getUserCart !== undefined && getUserCart.cart.length > 0 && (
                                <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                                    <hr />
                                    <p style={{fontSize: '30px'}}>Total: €{finalPrice}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Modal>
        </Context.Provider>
    );
};

export default Product;
