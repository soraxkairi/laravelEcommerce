import React from 'react';

const ProductProfile = ({ product }) => {
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
    };

    const titleStyles = {
        fontSize: '24px',
        marginBottom: '10px',
    };

    const descriptionStyles = {
        fontSize: '16px',
        marginBottom: '15px',
    };

    const priceStyles = {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#007bff',
    };

    const imageStyles = {
        flex: 1,
    };

    const imgStyles = {
        width: '100%',
        height: 'auto',
    };

    return (
        <div style={profileStyles}>
            <div style={infoStyles}>
                <h1 style={titleStyles}>{product.name}</h1>
                <p style={descriptionStyles}>{product.description}</p>
                <p style={priceStyles}>Price: ${product.price}</p>
                {/* Otros detalles del producto */}
            </div>
            <div style={imageStyles}>
                <img src={product.image} alt={product.name} style={imgStyles} />
            </div>
        </div>
    );
};

export default ProductProfile;
