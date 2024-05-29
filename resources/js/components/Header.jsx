import React, { useState, useEffect, useContext } from "react";
import logo from "../images/LogoAsier.png";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CartButton from "./CartButton";
import Button from "@mui/material/Button";
import * as UserContext from '../../context/Context';
import { Context } from "../context/context";



const Header = ({toggleModal,userCart }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [categories, setListCategory] = useState();
    const [isHover, setIsHover] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [cartList, setCartList] = useState(userCart);
    const {globalState,globalStateHandler} = useContext(Context);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMouseEnter = (category) => {
        setIsHover(true);
        setSelectedCategory(category);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
        setSelectedCategory();
    };

    const goHome = () => {
        window.location.href = `/`;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/showCategory");
                const data = await response.json();
                setListCategory(data);
                try {
                    const dataCart = await fetch("/cart");
                    const cartList = await dataCart.json();
                    setCartList(cartList);
                } catch (error) {
                    console.error("Cant get cart list data:", error);
                }
            } catch (error) {
                console.error("Cant get products data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
     if (globalState)
        {
            if(globalState.cartList)
                {
                    console.log(globalState.cartList);
                    setCartList(globalState.cartList);
                }
        }
    }, [globalState]);

   

    return (
        <header
            style={{
                backgroundColor: "rgba(240, 240, 240, 0.7 )",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "100%",
            }}
        >
            <div style={{ flexDirection: "row", display: "flex", gap: "32px" }}>
                <div className="logo" style={{ flexShrink: "0" }}>
                    <button onClick={goHome}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: "100px", borderRadius: "30px" }}
                        />
                    </button>
                </div>
                <div style={{ position: "relative", marginLeft: "4%" }}>
                    {categories != null && (
                        <button
                            className={`menu-button ${menuOpen ? "open" : ""}`}
                            onClick={toggleMenu}
                            style={{
                                backgroundColor: "#F7F7F7",
                                border: "none",
                                width: "80px",
                                height: "80px",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                                borderRadius: "15px",
                            }}
                        >
                            ☰
                        </button>
                    )}
                    {menuOpen && (
                        <ul
                            className="menu-items"
                            style={{
                                position: "absolute",
                                width: "100%",
                                background: "white",
                                border: "3px solid #ccc",
                                borderRadius: "20px",
                                overflow: "hidden",
                                marginLeft: "130%",
                                marginTop: "-90%",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    style={{
                                        whiteSpace: "nowrap",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <button
                                        style={{
                                            backgroundColor:
                                                category === selectedCategory
                                                    ? "lightgray"
                                                    : "white",
                                            color: "black",
                                            transition:
                                                "background 0.3s ease, color 0.3s ease",
                                            padding: "8px",
                                            width: "100%",
                                        }}
                                        onMouseEnter={() =>
                                            handleMouseEnter(category)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() =>
                                            (window.location.href = `/category/${category.category_name}`)
                                        }
                                    >
                                        {category.category_name}
                                    </button>
                                    {index < categories.length - 1 && (
                                        <hr style={{ width: "100%" }}></hr>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            {cartList && (
                <CartButton
                    menuOpen={menuOpen}
                    itemCount={cartList.cart.length}
                    toggleModal={toggleModal}
                />
            )}
        </header>
    );
};

export default Header;
