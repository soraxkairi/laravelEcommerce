import React from "react";
import Header from "../components/Header";
import Products from "../components/ProductsHome";
import HeroImages from "../components/HeroImages";

const Home = () => {
    return (
        <div style={{ backgroundColor: "#AEFFFE", padding: "20px", width:"100%", height:"100%" }}>
            <Header />
            <hr style={{ width: "100%", borderTop: "3px solid black" }} />
            <HeroImages />
            <hr style={{ width: "100%", borderTop: "3px solid black", marginTop: "3%" }} />

            <Products />
        </div>
    );
};

export default Home;
