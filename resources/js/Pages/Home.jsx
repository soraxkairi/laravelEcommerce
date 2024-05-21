import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Products from "../components/ProductsHome";
import HeroImages from "../components/HeroImages";
import cityImage from "../images/city.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Home = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div id="root">
            <div
                style={{
                    backgroundColor: "rgba(196, 196, 196, 1)",
                    // backgroundImage: `url(${cityImage})`,
                    padding: "20px",
                    width: "100%",
                    height: "100%",
                }}
            >
                <Header toggleModal={setOpenModal} />
                <hr style={{ width: "100%", borderTop: "3px solid black" }} />
                <HeroImages />
                <hr
                    style={{
                        width: "100%",
                        borderTop: "3px solid black",
                        marginTop: "3%",
                    }}
                />
                <Products />
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
                    padding: "30px",
                    transform: "translateX(-100%)",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    Carrito:
                    <hr />
                </div>
            </Modal>
        </div>
    );
};

export default Home;
