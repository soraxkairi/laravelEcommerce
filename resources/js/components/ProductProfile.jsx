import React, { useState, useEffect } from "react";
import img1 from '../images/model1.jpg';
import img2 from '../images/model2.jpg';

const ProductProfile = ({ product }) => {
    const [rating, setRating] = useState(0);


    //----------------STYLES------------------------------
    const profileStyles = {
        display: 'flex',
        margin: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    };

    const infoStyles = {
        flex: 1,
        padding: '20px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    };

    const titleStyles = {
        fontSize: '24px',
        marginBottom: '10px',
        textAlign:'center',
    };

    const descriptionStyles = {
        fontSize: '22px',
        marginBottom: '10px',
        padding: '10px',
        marginTop:'15px',
        marginLeft:'1%'
      };


    const starStyles = {
        fontSize: '28px',
        color: 'orange',
        cursor: 'pointer',
        marginLeft:'1%'

      };

    const priceStyles = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#007bff',
        marginLeft:'1%'

    };

    const imageStyles = {
        flex: 1,
    };

    const imgStyles = {
        width: '100%',
        aspectRatio:'3/2',
        objectFit:'cover'
    };

    const buttonStyles = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'orange',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        marginTop:'15%'
      };

    //-------------------------------------------------------------------------------
    const handleRatingChange = (newRating) => {
        setRating(newRating);
      };

      const generateStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <span
              key={i}
              style={starStyles}
              onClick={() => handleRatingChange(i)}
            >
              {i <= rating ? '★' : '☆'}
            </span>
          );
        }
        return stars;
      };


    return (
        <div style={profileStyles}>
            <div style={infoStyles}>
                <h1 style={titleStyles}>{product.product_name}</h1>
                <hr/>
                <p style={descriptionStyles}>{product.description}</p>
                <div>
                {generateStars()}
                </div>
                <p style={priceStyles}>Price: ${product.price}</p>
                <button style={buttonStyles}>Añadir al carrito 🛒</button>

            </div>


            <div style={imageStyles}>
                <img src={img2} alt={product.name} style={imgStyles} />
            </div>
        </div>
    );
};

export default ProductProfile;
