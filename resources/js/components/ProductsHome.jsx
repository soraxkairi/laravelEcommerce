import React from "react";
import { useState, useEffect } from "react";

const Button = ({ label, data }) => {
    return (
        <button
            style={{
                padding: "0.5rem 1rem",
                margin: "0.5rem",
                backgroundColor: "#0074D9",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            <div style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                <p>{data.product_name}</p>
                <p>{data.price}</p>
                <p>{data.description}</p>
            </div>
        </button>
    );
};


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Cant get products data:", error);
            }
        };

        fetchData();
    }, []);

    // const products = [
    //     { label: 'Producto 1', data: 'Precio: $10' },
    //     { label: 'Producto 2', data: 'Precio: $15' },
    //     { label: 'Producto 3', data: 'Precio: $20' },
    //     { label: 'Producto 4', data: 'Precio: $25' },
    // ];

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {products.length > 0 &&
                products.map((product, index) => (
                    <Button
                        key={index}
                        data={product}
                    />
                ))}
        </div>
    );
};

export default Products;
