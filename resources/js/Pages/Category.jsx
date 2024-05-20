import React from "react";
import { useState } from "react";
import img1 from "../images/model1.jpg";
import img2 from "../images/model2.jpg";
import Header from "../components/Header";
import CategoryProducts from "../components/Products";
import HeroImages from "../components/HeroImages";


const Category = ({ slug, data }) => {
    const [products, setProducts] = useState([]);

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
            <Header />
            <hr style={{ width: "100%", borderTop: "3px solid black" }} />

            <CategoryProducts slug={slug} />
        </div>
    );
};

export default Category;
