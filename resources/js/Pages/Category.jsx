import React from "react";
import { useState } from "react";
import img1 from "../images/model1.jpg";
import img2 from "../images/model2.jpg";
import Header from "../components/Header";
import CategoryProducts from "../components/Products";
import HeroImages from "../components/HeroImages";
import Modal from "@mui/material/Modal";


const Category = ({ slug, data }) => {
    const [products, setProducts] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div
            style={{
                backgroundColor: 'rgba(196 , 196, 196,1)',
                padding: "20px",
                width: "100%",
                height: "100%",
                minHeight: "100vh"
            }}
        >
            <Header toggleModal={setOpenModal}/>
            <hr style={{ width: "100%", borderTop: "3px solid black" }} />

            <CategoryProducts slug={slug} />
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


        </div>

    );
};

export default Category;
