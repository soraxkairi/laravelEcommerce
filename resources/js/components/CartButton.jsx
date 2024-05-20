import React, { useState } from "react";

const CartButton = ({ menuOpen, itemCount,toggleModal}) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: isHovered ? "#ddb347" : "#f0c14b",
        border: "1px solid #a88734",
        cursor: "pointer",
        position: "relative",
        transition: "transform 0.3s ease, background-color 0.3s ease",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
    };

    const itemCountStyles = {
        position: "absolute",
        top: "5px",
        right: "5px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        padding: "2px 5px",
        fontSize: "12px",
    };

    const activeModal = () => {
        toggleModal(true);
    }


    return (
        <div className={`cart ${menuOpen ? "open" : ""}` }>
            <button
                className="cart-button"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "#f0c14b",
                    border: "1px solid #a88734",
                    cursor: "pointer",
                    position: "relative",
                    transition:
                        "transform 0.3s ease, background-color 0.3s ease",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={activeModal}
            >
                <span
                    style={{
                        fontSize: "150%",
                        position: "absolute",
                        top: "20%",
                    }}
                    role="img"
                    aria-label="cart"
                >
                    🛒
                </span>
                {itemCount > 0 && (
                    <span
                        style={{
                            position: "absolute",
                            top: "65%",
                            right: "-5%",
                            backgroundColor: "red",
                            color: "white",
                            borderRadius: "50%",
                            padding: "5px 10px",
                            fontSize: "13px",
                        }}
                    >
                            {itemCount}</span>
                )}
                <span style={{ position: "absolute", top: "60%" }}>Cart</span>
            </button>
        </div>
    );
};

export default CartButton;
