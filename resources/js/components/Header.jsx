import React, { useState, useEffect } from "react";
import logo from "../images/LogoAsier.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [categories, setListCategory] = useState();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("category");
                const data = await response.json();
                setListCategory(data);
            } catch (error) {
                console.error("Cant get products data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedItem) {
            console.log(selectedItem);
        }
    }, [selectedItem]);

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
                                background: "white",
                                border: "1px solid #ccc",
                                borderRadius: "20px",
                                overflow: "hidden",
                                marginLeft: "130%",
                                marginTop: "-40%",
                            }}
                        >
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    style={{
                                        padding: "8px",
                                        whiteSpace: "nowrap",
                                    }}
                                    onClick={() =>
                                        handleItemClick(category.category_name)
                                    }
                                >
                                    {category.category_name}{" "}
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
