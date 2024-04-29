import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header style={{ backgroundColor: '#f0f0f0', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="logo" style={{ flex: 1 }}>
                {/* Aquí puedes agregar tu logo */}
                <img src="logo.png" alt="Logo" style={{ width: '100px' }} />
            </div>
            <button
                className={`menu-button ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                }}
            >
                {/* Icono del botón desplegable */}
                ☰
            </button>
            <div className={`cart ${menuOpen ? 'open' : ''}`} style={{ display: 'flex', alignItems: 'center' }}>
                {/* Contenido del carrito */}
                {/* Aquí puedes agregar elementos del carrito */}
                <span style={{ marginRight: '1rem' }}>🛒</span>
                <span>3 items</span>
            </div>
        </header>
    );
};

export default Header;
