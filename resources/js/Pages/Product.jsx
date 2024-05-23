import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductProfile from "../components/ProductProfile";
import { Context } from "../context/context";
import Modal from "@mui/material/Modal";

const Product = ({ slug, product }) => {
    const [getUserCart, setUserCart] = useState();
    const [globalState, setGlobalState] = useState();
    const [openModal, setOpenModal] = useState(false);

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
                <Header userCart={getUserCart} toggleModal={setOpenModal} />
                <hr style={{ width: "100%", borderTop: "3px solid black" }} />
                <ProductProfile product={product} userCart={setUserCart} openModal={setOpenModal}/>
            </div>

            <Modal
                open={openModal}
                // onClose={() => toggleModal(false)}
                style={{
                    position: "fixed",
                    top: 0,
                    left: "100%",
                    width: "400px",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    overflowY: "scroll",
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 1)",
                    padding: "30px",
                    transform: "translateX(-100%)",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    Carrito:
                    <hr />
                </div>
            </Modal>
        </Context.Provider>
    );
};

export default Product;
