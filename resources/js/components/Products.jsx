import React from "react";
import { useState, useEffect } from "react";
import img1 from "../images/model1.jpg";
import img2 from "../images/model2.jpg";

const Button = ({ label, data,slug }) => {
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
            selectedProduct(data,slug)
        }
        >
          <img
          //   src={data.image_url}
            src={img2}
            alt={data.product_name}
            style={{ width: "100%", borderRadius: "20px", objectFit:"cover", aspectRatio:"3/2"}}
          />

          <p style={{ marginTop: "0.5rem" }}>{data.product_name}</p>
        </button>

      </div>
    );
  };

  const selectedProduct = async (product,slug) =>{
      window.location.href = `/${slug}/${product.id}}`;
  }

  const CategoryProducts = ({ slug }) => {
      const [products, setProducts] = useState([]);

      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await fetch("/categoryProducts/" + slug);
                  const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Cant get products data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (products) {
            console.log(products.length);

        }
    }, [products]);



    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                marginTop: "2%",

            }}
        >
            <h2 style={{ fontWeight: "bold", fontSize: "160%" }}>{slug}</h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:"repeat(3, 1fr)",
                    gridGap:"16px",
                    gap: "16px",

                }}
            >
                {products.length > 0 &&(
                    products.map((product, index) => (
                        <Button key={index} data={product} slug={slug}/>
                    )
                    ))}
            </div>
        </div>
    );
};

export default CategoryProducts;
