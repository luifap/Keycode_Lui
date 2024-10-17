import React from 'react';
import illustration from '../assets/illustration-hero.svg';

const Header = () => {
  return (
    <div>
      <img src={illustration} alt="Hero" style={{ width: '100%' }} />
      <h1 style={{ textAlign: 'center' }}>Resumen del pedido</h1>
    </div>
  );
};

export default Header;
