import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f4f4f4' }}>
      <h1>Dulce Alaska</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
