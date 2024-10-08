import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/styles.css';

const products = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 200 },
  { id: 3, name: 'Producto 3', price: 300 },
];

const ProductDetails = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'), 10);

  const product = products.find((p) => p.id === id);

  return (
    <div className="container">
      {product ? (
        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="product-price">Precio: ${product.price}</p>
        </div>
      ) : (
        <h1>Producto no encontrado</h1>
      )}
    </div>
  );
};

export default ProductDetails;
