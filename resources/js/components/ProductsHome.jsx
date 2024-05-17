import React from "react";
import { useState, useEffect } from "react";
import img1 from '../images/model1.jpg';
import img2 from '../images/model2.jpg';
const Button = ({ label, data }) => {
  const [isHover, setIsHover] = useState(false);

  const boxStyle = {width: "100%",height: "100%",padding: "0.5rem 1rem",margin: "10px",backgroundColor: isHover ? "lightgray" : "gray",color: "white",
    border: "none",borderRadius: "20px",cursor: "pointer",display: "flex",justifyContent: "space-between",flexDirection: "column",alignItems: "center",transition: ".2s",
    cursor: "pointer",
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div style={{ width: "100%" }}>

      <button
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() =>
            selectedProduct(data)
        }
      >
        <img
        //   src={data.image_url}
          src={img1}
          alt={data.product_name}
          style={{ width: "100%", borderRadius: "20px", objectFit:"cover"}}
        />

        <p style={{ marginTop: "0.5rem" }}>{data.product_name}</p>
      </button>

    </div>
  );
};

const selectedProduct = async (product) =>{
    let slug = -1;
    console.log(product);
        try {
          const response = await fetch(product.category_id);
          slug = await response.text();
        } catch (error) {
          console.error("Cant get products data:", error);
        }

    window.location.href = `/${slug}/${product.id}`;
}

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Cant get products data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginTop:"2%" }}>
      <h2 style={{ fontWeight: "bold", fontSize:"160%"  }}>Productos más recientes: </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
        {products.length > 0 &&
          products.map((product, index) => (
            <Button key={index} data={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
