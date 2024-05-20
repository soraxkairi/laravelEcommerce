import React from 'react';
import { useState } from 'react';
import img1 from '../images/model1.jpg';
import img2 from '../images/model2.jpg';


const showHeroImages = () => {
    const [products, setProducts] = useState([]);

    return (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", marginLeft: "3%" }}>
        <div style={{ flex: "1 1 40%", backgroundColor:'rgba(196, 196, 196, 0.8)'}}>
          <h2 style={{ fontWeight: "bold", fontSize:"160%" }}>«Tu estilo, tu elección, tu satisfacción.»</h2>
          <p style={{marginTop:"4%"}}>
              Esta es la mejor tienda de ropa, cada temporada tenemos las ropas mas solicitadas en el mundo. A que esperas, ¡Ven y prueba nuestros productos!
          </p>
        </div>
        <div style={{ flex: "1 1 60%", display: "flex", justifyContent: "flex-end" }}>
          <img src={img1} alt="Product 1" style={{ width: "370px", height: "400px", marginRight: "-5%", borderRadius: "15px", marginTop: "4%", objectFit:"cover" }} />
          <img src={img2} alt="Product 2" style={{ width: "370px", height: "400px",  borderRadius:"15px", marginRight: "5%", marginBottom:"2%", objectFit:"cover"}} />
        </div>
      </div>
    );
  };

export default showHeroImages;
