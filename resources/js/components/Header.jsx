import React, { useState, useEffect } from "react";
import logo from "../images/LogoAsier.png";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [categories, setListCategory] = useState();
    const [isHover, setIsHover] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/showCategory");
                const data = await response.json();
                console.log(data);
                setListCategory(data);
            } catch (error) {
                console.error("Cant get products data:", error);
            }
        };
        fetchData();
    }, []);



    return (
        <header
            style={{
                backgroundColor: "#AEFFFE",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <div style={{ flexDirection: "row", display: "flex", gap: "32px" }}>
                <div className="logo" style={{ flexShrink: "0" }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: "100px", borderRadius: "30px" }}
                    />
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
                                            // handleItemClick(category)
                                            window.location.href = `/category/${category.category_name}`
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
            <div
                className={`cart ${menuOpen ? "open" : ""}`}
                style={{ display: "flex", alignItems: "center" }}
            >
                {/* Contenido del carrito */}
                {/* Aquí puedes agregar
                elementos del carrito */}
                <span style={{ marginRight: "1rem" }}>🛒</span>
                <span>3 items</span>
            </div>
        </header>
    );
};

export default Header;
